import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { JobRelationEntity } from '../entities/job-relation.entity';
import { JobRelationDTO, JobRelationUpdateDTO } from '../dto/job-relation.dto';
import { ErrorManager } from '../../../../helpers/error.manager';

export class JobRelationService {
  constructor(
    @InjectRepository(JobRelationEntity)
    private readonly jobrelationRepository: Repository<JobRelationEntity>,
  ) {}

  //crear una nueva contratacion
  public async createOne(body: JobRelationDTO): Promise<JobRelationEntity> {
    try {
      const jobrelationExist = await this.jobrelationRepository.find({
        where: { name: body.name },
      });
      if (jobrelationExist.length) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The job relation exist on database',
        });
      }

      const jobrelation = await this.jobrelationRepository.save(body);
      if (!jobrelation) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The jobrelation is not created',
        });
      }
      return jobrelation;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Buscar todas las contratacions de la db
  public async findAll(): Promise<JobRelationEntity[]> {
    try {
      const alljobrelations = await this.jobrelationRepository.find();
      if (!alljobrelations.length) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: "We don't have jobrelations on database",
        });
      }
      return alljobrelations;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Busca una contratacion en particular
  public async findOne(id: string): Promise<JobRelationEntity> {
    try {
      const jobrelation = await this.jobrelationRepository
        .createQueryBuilder('jobrelation')
        .where({ id })
        .getOne();

      if (!jobrelation) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The jobrelation with ID: ${id} do not exist`,
        });
      }

      return jobrelation;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Modificar una contratacion en particular
  public async updateOne(
    id: string,
    body: JobRelationUpdateDTO,
  ): Promise<JobRelationEntity> {
    try {
      const jobrelation: UpdateResult = await this.jobrelationRepository.update(
        id,
        body,
      );
      if (!jobrelation.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The jobrelation number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Borrar una contratacion (soft)
  public async deleteOne(id: string): Promise<JobRelationEntity> {
    try {
      const jobrelation: UpdateResult = await this.jobrelationRepository.update(
        id,
        {
          isActive: false,
        },
      );
      if (!jobrelation.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The jobrelation number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
