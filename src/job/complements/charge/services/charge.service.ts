import { InjectRepository } from '@nestjs/typeorm';
import { ChargeEntity } from '../entities/charge.entity';
import { Repository, UpdateResult } from 'typeorm';
import { ErrorManager } from '../../../../helpers/error.manager';
import { ChargeDTO, ChargeUpdateDTO } from '../dto/charge.dto';

export class ChargeService {
  constructor(
    @InjectRepository(ChargeEntity)
    private readonly chargeRepository: Repository<ChargeEntity>,
  ) {}

  //crear un nuevo horario
  public async createOne(body: ChargeDTO): Promise<ChargeEntity> {
    try {
      const chargeExist = await this.chargeRepository.find({
        where: { name: body.name },
      });
      if (chargeExist.length) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The charge exist on database',
        });
      }

      const charge = await this.chargeRepository.save(body);
      if (!charge) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The charge is not created',
        });
      }
      return charge;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Buscar todos los horarios de la db
  public async findAll(): Promise<ChargeEntity[]> {
    try {
      const allcharges = await this.chargeRepository.find();
      if (!allcharges.length) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: "We don't have charges on database",
        });
      }
      return allcharges;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Busca un horario en particular
  public async findOne(id: number): Promise<ChargeEntity> {
    try {
      const charge = await this.chargeRepository
        .createQueryBuilder('charge')
        .where({ id })
        .getOne();

      if (!charge) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The charge with ID: ${id} do not exist`,
        });
      }

      return charge;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Modificar un horario en particular
  public async updateOne(
    id: number,
    body: ChargeUpdateDTO,
  ): Promise<ChargeEntity> {
    try {
      const charge: UpdateResult = await this.chargeRepository.update(id, body);
      if (!charge.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The charge number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Borrar un horario (soft)
  public async deleteOne(id: number): Promise<ChargeEntity> {
    try {
      const charge: UpdateResult = await this.chargeRepository.update(id, {
        isActive: false,
      });
      if (!charge.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The charge number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
