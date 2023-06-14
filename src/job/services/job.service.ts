import { InjectRepository } from '@nestjs/typeorm';
import { JobEntity } from '../entities/job.entity';
import { Repository, UpdateResult } from 'typeorm';
import { ErrorManager } from '../../helpers/error.manager';
import { JobDTO, JobUpdateDTO } from '../dto/job.dto';

export class JobService {
  constructor(
    @InjectRepository(JobEntity)
    private readonly jobRepository: Repository<JobEntity>,
  ) {}

  //crear una nueva oferta de trabajo
  public async createOne(body: JobDTO): Promise<JobEntity> {
    try {
      const job = await this.jobRepository.save(body);
      if (!job) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The job is not created',
        });
      }
      return job;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Buscar todas los ofertas de trabajo de la db
  public async findAll(): Promise<JobEntity[]> {
    try {
      const alljobs = await this.jobRepository.find();
      if (!alljobs.length) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: "We don't have jobs on database",
        });
      }
      return alljobs;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Buscar una oferta de trabajo en particular
  public async findOne(id: number): Promise<JobEntity> {
    try {
      const job = await this.jobRepository
        .createQueryBuilder('job')
        .where({ id })
        .getOne();

      if (!job) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The job with ID: ${id} do not exist`,
        });
      }

      return job;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Modificar una oferta de trabajo en particular
  public async updateOne(id: number, body: JobUpdateDTO): Promise<JobEntity> {
    try {
      const job: UpdateResult = await this.jobRepository.update(id, body);
      if (!job.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The job number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Borrar una oferta de trabajo (soft)
  public async deleteOne(id: number): Promise<JobEntity> {
    try {
      const job: UpdateResult = await this.jobRepository.update(id, {
        isActive: false,
      });
      if (!job.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The job number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
