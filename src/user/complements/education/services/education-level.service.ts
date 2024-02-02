import { InjectRepository } from '@nestjs/typeorm';
import { EducationLevelEntity } from '../entities/education-level.entity';
import { Repository, UpdateResult } from 'typeorm';
import { ErrorManager } from '../../../../helpers/error.manager';
import {
  EducationLevelDTO,
  EducationLevelUpdateDTO,
} from '../dto/education-level.dto';

export class EducationLevelService {
  constructor(
    @InjectRepository(EducationLevelEntity)
    private readonly educationLevelRepository: Repository<EducationLevelEntity>,
  ) {}

  //crear un nuevo nivel de estudio
  public async createOne(
    body: EducationLevelDTO,
  ): Promise<EducationLevelEntity> {
    try {
      const educationlvl = await this.educationLevelRepository.save(body);
      if (!educationlvl) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The educationlvl is not created',
        });
      }
      return educationlvl;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Buscar todos los niveles de estudios de la db
  public async findAll(): Promise<EducationLevelEntity[]> {
    try {
      const alleducationlvls = await this.educationLevelRepository.find();
      if (!alleducationlvls.length) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: "We don't have educationlvls on database",
        });
      }
      return alleducationlvls;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Busca un nivel de estudio en particular
  public async findOne(id: string): Promise<EducationLevelEntity> {
    try {
      const educationlvl = await this.educationLevelRepository
        .createQueryBuilder('educationlvl')
        .where({ id })
        .getOne();

      if (!educationlvl) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The educationlvl with ID: ${id} do not exist`,
        });
      }

      return educationlvl;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Modificar un nivel de estudio en particular
  public async updateOne(
    id: string,
    body: EducationLevelUpdateDTO,
  ): Promise<EducationLevelEntity> {
    try {
      const educationlvl: UpdateResult =
        await this.educationLevelRepository.update(id, body);
      if (!educationlvl.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The educationlvl number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Borrar un nivel de estudio (soft)
  public async deleteOne(id: string): Promise<EducationLevelEntity> {
    try {
      const educationlvl: UpdateResult =
        await this.educationLevelRepository.update(id, {
          isActive: false,
        });
      if (!educationlvl.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The educationlvl number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
