import { InjectRepository } from '@nestjs/typeorm';
import { EducationEntity } from '../entities/education.entity';
import { Repository, UpdateResult } from 'typeorm';
import { ErrorManager } from '../../../../helpers/error.manager';
import { EducationDTO } from '../dto/education.dto';
import { EducationUpdateDTO } from '../dto/education.dto';

export class EducationService {
  constructor(
    @InjectRepository(EducationEntity)
    private readonly educationRepository: Repository<EducationEntity>,
  ) {}

  //crear una nueva formacion
  public async createOne(body: EducationDTO): Promise<EducationEntity> {
    try {
      const education = await this.educationRepository.save(body);
      if (!education) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The education is not created',
        });
      }
      return education;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Buscar todas las formaciones de la db
  public async findAll(): Promise<EducationEntity[]> {
    try {
      const alleducations = await this.educationRepository.find();
      if (!alleducations.length) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: "We don't have educations on database",
        });
      }
      return alleducations;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Busca una formacion en particular
  public async findOne(id: string): Promise<EducationEntity> {
    try {
      const education = await this.educationRepository
        .createQueryBuilder('education')
        .where({ id })
        .getOne();

      if (!education) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The education with ID: ${id} do not exist`,
        });
      }

      return education;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Modificar una formacion en particular
  public async updateOne(
    id: string,
    body: EducationUpdateDTO,
  ): Promise<EducationEntity> {
    try {
      const education: UpdateResult = await this.educationRepository.update(
        id,
        body,
      );
      if (!education.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The education number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Borrar una formacion (soft)
  public async deleteOne(id: string): Promise<EducationEntity> {
    try {
      const education: UpdateResult = await this.educationRepository.update(
        id,
        {
          isActive: false,
        },
      );
      if (!education.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The education number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
