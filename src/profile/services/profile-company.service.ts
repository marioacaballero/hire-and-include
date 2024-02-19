import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { hash } from 'bcrypt';
import { ProfileCompanyEntity } from '../entities/profile-company.entity';
import { ErrorManager } from '../../helpers/error.manager';
import {
  ProfileCompanyDTO,
  ProfileCompanyUpdateDTO,
} from '../dto/profile-company.dto';

export class ProfileCompanyService {
  constructor(
    @InjectRepository(ProfileCompanyEntity)
    private readonly profileCompanyRepository: Repository<ProfileCompanyEntity>,
  ) {}

  //Profile Register
  public async register(userObject: ProfileCompanyDTO) {
    try {
      //Hash password
      userObject.password = await hash(
        userObject.password,
        +process.env.HASH_SALT,
      );

      const profile: ProfileCompanyEntity = await this.profileCompanyRepository
        .createQueryBuilder('profile-company')
        .where({ email: userObject.email })
        .getOne();

      if (profile) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The email is already registered in the database',
        });
      }
      const newProfile = await this.profileCompanyRepository.save(userObject);

      if (!newProfile) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The new company profile is not created',
        });
      }
      return newProfile;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Busca un usuario por email
  public async findOneByEmail(email: string): Promise<ProfileCompanyEntity> {
    try {
      const profile: ProfileCompanyEntity = await this.profileCompanyRepository
        .createQueryBuilder('profile-company')
        .where({ email })
        .getOne();

      if (!profile) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The company profile not found with email: ${email}`,
        });
      }

      return profile;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findOneByCuil(IDnumber: string): Promise<ProfileCompanyEntity> {
    try {
      const profile: ProfileCompanyEntity = await this.profileCompanyRepository
        .createQueryBuilder('profile-company')
        .where({ IDnumber })
        .getOne();

      if (!profile) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The company profile not found with IDnumber: ${IDnumber}`,
        });
      }

      return profile;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Buscar todas los usuarios de la db
  public async findAll(): Promise<ProfileCompanyEntity[]> {
    try {
      const allprofiles = await this.profileCompanyRepository.find();
      if (!allprofiles.length) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: "We don't have company profiles on database",
        });
      }
      return allprofiles;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Busca un usuario en particular
  public async findOne(id: string): Promise<ProfileCompanyEntity> {
    try {
      const profile = await this.profileCompanyRepository
        .createQueryBuilder('profile-company')
        .where({ id })
        .leftJoinAndSelect('profile-company.company', 'company')
        .leftJoinAndSelect('profile-company.activityArea', 'activityArea')
        .getOne();

      if (!profile) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The company profile with ID: ${id} do not exist`,
        });
      }

      return profile;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Modificar un usuario en particular
  public async updateOne(
    id: string,
    body: ProfileCompanyUpdateDTO,
  ): Promise<ProfileCompanyEntity> {
    try {
      const profile: UpdateResult = await this.profileCompanyRepository.update(
        id,
        body,
      );
      if (!profile.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The company profile number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Borrar un usuario (soft)
  public async deleteOne(id: string): Promise<ProfileCompanyEntity> {
    try {
      const profile: UpdateResult = await this.profileCompanyRepository.update(
        id,
        {
          isActive: false,
        },
      );
      if (!profile.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The company profile number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
