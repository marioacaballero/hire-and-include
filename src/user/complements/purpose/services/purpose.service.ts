import { InjectRepository } from '@nestjs/typeorm';
import { PurposeEntity } from '../entities/purpose.entity';
import { Repository, UpdateResult } from 'typeorm';
import { ErrorManager } from '../../../../helpers/error.manager';
import { PurposeDTO, PurposeUpdateDTO } from '../dto/purpose.dto';

export class PurposeService {
  constructor(
    @InjectRepository(PurposeEntity)
    private readonly purposeRepository: Repository<PurposeEntity>,
  ) {}

  //crear un nuevo proposito
  public async createOne(body: PurposeDTO): Promise<PurposeEntity> {
    try {
      const purpose = await this.purposeRepository.save(body);
      if (!purpose) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The purpose is not created',
        });
      }
      return purpose;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Buscar todas los propositos de la db
  public async findAll(): Promise<PurposeEntity[]> {
    try {
      const allpurposes = await this.purposeRepository.find();
      if (!allpurposes.length) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: "We don't have purposes on database",
        });
      }
      return allpurposes;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Busca un proposito en particular
  public async findOne(id: number): Promise<PurposeEntity> {
    try {
      const purpose = await this.purposeRepository
        .createQueryBuilder('purpose')
        .where({ id })
        .getOne();

      if (!purpose) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The purpose with ID: ${id} do not exist`,
        });
      }

      return purpose;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Modificar un proposito en particular
  public async updateOne(
    id: number,
    body: PurposeUpdateDTO,
  ): Promise<PurposeEntity> {
    try {
      const purpose: UpdateResult = await this.purposeRepository.update(
        id,
        body,
      );
      if (!purpose.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The purpose number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Borrar un proposito (soft)
  public async deleteOne(id: number): Promise<PurposeEntity> {
    try {
      const purpose: UpdateResult = await this.purposeRepository.update(id, {
        isActive: false,
      });
      if (!purpose.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The purpose number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
