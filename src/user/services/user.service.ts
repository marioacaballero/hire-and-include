import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { ErrorManager } from '../../helpers/error.manager';
import { UserDTO, UserUpdateDTO } from '../dto/user.dto';
import { ProfileService } from '../../profile/services/profile.service';
import { JobService } from '../../job/services/job.service';
import { JobUserDTO } from '../../job/dto/job-user.dto';
import { JobUserEntity } from '../../job/entities/job-user.entity';

export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(JobUserEntity)
    private readonly jobUserRepository: Repository<JobUserEntity>,
    private readonly profileService: ProfileService,
    private readonly jobService: JobService,
  ) {}

  //crear un nuevo usuario
  public async createOne(body: UserDTO): Promise<UserEntity> {
    try {
      const profile = await this.profileService.findOne(body.profile.id);
      if (profile.userProfile) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The profile has an user',
        });
      }
      body.profile = profile;
      // const dniExist = await this.userRepository.find({
      //   where: { IDnumber: body.IDnumber },
      // });

      // if (dniExist.length) {
      //   throw new ErrorManager({
      //     type: 'BAD_REQUEST',
      //     message: 'The IDnumber is on database',
      //   });
      // }

      const user = await this.userRepository.save(body);
      if (!user) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The user is not created',
        });
      }
      return this.findOne(user.id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Buscar todas los usuarios de la db
  public async findAll(): Promise<UserEntity[]> {
    try {
      const allusers = await this.userRepository.find();
      if (!allusers.length) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: "We don't have users on database",
        });
      }
      return allusers;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Busca un usuario en particular
  public async findOne(id: string): Promise<UserEntity> {
    try {
      const user = await this.userRepository
        .createQueryBuilder('user')
        .where({ id })
        .leftJoinAndSelect('user.profile', 'profile')
        .leftJoinAndSelect('user.jobUser', 'jobUser')
        .leftJoinAndSelect('jobUser.job', 'job')
        .getOne();

      if (!user) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The user with ID: ${id} do not exist`,
        });
      }

      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Modificar un usuario en particular
  public async updateOne(id: string, body: UserUpdateDTO): Promise<UserEntity> {
    try {
      const user: UpdateResult = await this.userRepository.update(id, body);
      if (!user.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The user number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Borrar un usuario (soft)
  public async deleteOne(id: string): Promise<UserEntity> {
    try {
      const user: UpdateResult = await this.userRepository.update(id, {
        isActive: false,
      });
      if (!user.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The user number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Postularse a un trabajo en específico
  public async applyToJob(body: JobUserDTO, jobId: string) {
    try {
      const job = await this.jobService.findOne(jobId);
      const user = await this.findOne(body.user.id);
      const jobExist = user.jobUser.find((us) => us.job.id === job.id);

      if (jobExist) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: `The user was postulated on job id: ${jobId}`,
        });
      }

      return await this.jobUserRepository.save({ job, user });
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
