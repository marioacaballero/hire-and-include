import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileEntity } from './entities/profile.entity';
import { ProfileDTO, ProfileUpdateDTO } from './dto/profile.dto';
import { ErrorManager } from '../helpers/error.manager';

export class ProfileService {
  constructor(
    @InjectRepository(ProfileEntity)
    private readonly profileRepository: Repository<ProfileEntity>,
  ) {}

  //Crea un usuario
  public async createProfile(body: ProfileDTO): Promise<any> {
    try {
      const profile: ProfileEntity = await this.profileRepository.save(body);
      if (!profile) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The profile is not created',
        });
      }
      return profile;
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
      const allprofiles = await this.profileRepository.find();
      if (!allprofiles.length) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
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
