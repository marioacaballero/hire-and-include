import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { JobExperienceEntity } from '../entities/job-experience.entity';
import {
  JobExperienceDTO,
  JobExperienceUpdateDTO,
} from '../dto/job-experience.dto';
import { ErrorManager } from '../../../../helpers/error.manager';

export class JobExperienceService {
  constructor(
    @InjectRepository(JobExperienceEntity)
    private readonly jobexperienceRepository: Repository<JobExperienceEntity>,
  ) {}

  //crear un nuevo experiencia
  public async createOne(body: JobExperienceDTO): Promise<JobExperienceEntity> {
    try {
      const jobexp = await this.jobexperienceRepository.save(body);
      if (!jobexp) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The jobexp is not created',
        });
      }
      return jobexp;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Buscar todas los experiencias de la db
  public async findAll(): Promise<JobExperienceEntity[]> {
    try {
      const alljobexps = await this.jobexperienceRepository.find();
      if (!alljobexps.length) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: "We don't have jobexps on database",
        });
      }
      return alljobexps;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Busca un experiencia en particular
  public async findOne(id: number): Promise<JobExperienceEntity> {
    try {
      const jobexp = await this.jobexperienceRepository
        .createQueryBuilder('job-experience')
        .where({ id })
        .getOne();

      if (!jobexp) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The jobexp with ID: ${id} do not exist`,
        });
      }

      return jobexp;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Modificar un experiencia en particular
  public async updateOne(
    id: number,
    body: JobExperienceUpdateDTO,
  ): Promise<JobExperienceEntity> {
    try {
      const jobexp: UpdateResult = await this.jobexperienceRepository.update(
        id,
        body,
      );
      if (!jobexp.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The jobexp number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Borrar un experiencia (soft)
  public async deleteOne(id: number): Promise<JobExperienceEntity> {
    try {
      const jobexp: UpdateResult = await this.jobexperienceRepository.update(
        id,
        {
          isActive: false,
        },
      );
      if (!jobexp.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The jobexp number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
