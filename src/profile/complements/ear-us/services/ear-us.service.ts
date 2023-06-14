import { InjectRepository } from '@nestjs/typeorm';
import { EarUsEntity } from '../entities/ear-us.entity';
import { Repository, UpdateResult } from 'typeorm';
import { EarUsDTO, EarUsUpdateDTO } from '../dto/ear-us.dto';
import { ErrorManager } from '../../../../helpers/error.manager';

export class EarUsService {
  constructor(
    @InjectRepository(EarUsEntity)
    private readonly earusRepository: Repository<EarUsEntity>,
  ) {}

  //crear un nuevo cuestionario
  public async createOne(body: EarUsDTO): Promise<EarUsEntity> {
    try {
      const ear = await this.earusRepository.save(body);
      if (!ear) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The ear is not created',
        });
      }
      return ear;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Buscar todos los cuestionarios de la db
  public async findAll(): Promise<EarUsEntity[]> {
    try {
      const allears = await this.earusRepository.find();
      if (!allears.length) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: "We don't have ears on database",
        });
      }
      return allears;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Busca un cuestionario en particular
  public async findOne(id: number): Promise<EarUsEntity> {
    try {
      const ear = await this.earusRepository
        .createQueryBuilder('ear')
        .where({ id })
        .getOne();

      if (!ear) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The ear with ID: ${id} do not exist`,
        });
      }

      return ear;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Modificar un cuestionario en particular
  public async updateOne(
    id: number,
    body: EarUsUpdateDTO,
  ): Promise<EarUsEntity> {
    try {
      const ear: UpdateResult = await this.earusRepository.update(id, body);
      if (!ear.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The ear number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Borrar un cuestionario (soft)
  public async deleteOne(id: number): Promise<EarUsEntity> {
    try {
      const ear: UpdateResult = await this.earusRepository.update(id, {
        isActive: false,
      });
      if (!ear.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The ear number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
