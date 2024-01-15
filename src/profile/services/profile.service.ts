import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt';
import { ProfileEntity } from '../entities/profile.entity';
import { ProfileDTO, ProfileUpdateDTO } from '../dto/profile.dto';
import { ErrorManager } from '../../helpers/error.manager';

export class ProfileService {
  constructor(
    @InjectRepository(ProfileEntity)
    private readonly profileRepository: Repository<ProfileEntity>,
  ) {}

  //Profile Register
  public async register(userObject: ProfileDTO) {
    try {
      //Hash password
      userObject.password = await hash(
        userObject.password,
        +process.env.HASH_SALT,
      );

      const profile: ProfileEntity = await this.profileRepository
        .createQueryBuilder('profile')
        .where({ email: userObject.email })
        .getOne();

      if (profile) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The email is already registered in the database',
        });
      }
      const newProfile = await this.profileRepository.save(userObject);

      if (!newProfile) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The new profile is not created',
        });
      }
      return newProfile;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Busca un usuario por email
  public async findOneByEmail(email: string): Promise<ProfileEntity> {
    try {
      const profile: ProfileEntity = await this.profileRepository
        .createQueryBuilder('profile')
        .where({ email })
        .getOne();

      if (!profile) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The profile not found with email: ${email}`,
        });
      }

      return profile;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Buscar todas los usuarios de la db
  public async findAll(): Promise<ProfileEntity[]> {
    try {
      const allprofiles = await this.profileRepository.find({
        where: { isActive: true },
      });
      if (!allprofiles.length) {
        throw new ErrorManager({
          type: 'OK',
          message: "We don't have profiles on database",
        });
      }
      return allprofiles;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Busca un usuario en particular
  public async findOne(id: number): Promise<ProfileEntity> {
    try {
      const profile = await this.profileRepository
        .createQueryBuilder('profile')
        .where({ id })
        .leftJoinAndSelect('profile.userProfile', 'userProfile')
        .leftJoinAndSelect('profile.earUs', 'earUs')
        .getOne();

      if (!profile) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The profile with ID: ${id} do not exist`,
        });
      }

      return profile;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Modificar un usuario en particular
  public async updateOne(
    id: number,
    body: ProfileUpdateDTO,
  ): Promise<ProfileEntity> {
    try {
      const profile: UpdateResult = await this.profileRepository.update(
        id,
        body,
      );
      if (!profile.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The profile number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Borrar un usuario (soft)
  public async deleteOne(id: number): Promise<ProfileEntity> {
    try {
      const profile: UpdateResult = await this.profileRepository.update(id, {
        isActive: false,
      });
      if (!profile.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The profile number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
