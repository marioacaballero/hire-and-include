import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CultureEntity } from '../entities/culture.entity';
import { ErrorManager } from '../../../../helpers/error.manager';
import { CultureDTO, CultureUpdateDTO } from '../dto/culture.dto';

export class CultureService {
  constructor(
    @InjectRepository(CultureEntity)
    private readonly cultureRepository: Repository<CultureEntity>,
  ) {}

  //crear una nueva cultura
  public async createOne(body: CultureDTO): Promise<CultureEntity> {
    try {
      const cultureExist = await this.cultureRepository.find({
        where: { name: body.name },
      });
      if (cultureExist.length) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The culture exist on database',
        });
      }

      const culture = await this.cultureRepository.save(body);
      if (!culture) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The culture is not created',
        });
      }
      return culture;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Buscar todas las culturas de la db
  public async findAll(): Promise<CultureEntity[]> {
    try {
      const allcultures = await this.cultureRepository.find();
      if (!allcultures.length) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: "We don't have cultures on database",
        });
      }
      return allcultures;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Busca una cultura en particular
  public async findOne(id: number): Promise<CultureEntity> {
    try {
      const culture = await this.cultureRepository
        .createQueryBuilder('culture')
        .where({ id })
        .getOne();

      if (!culture) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The culture with ID: ${id} do not exist`,
        });
      }

      return culture;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Modificar una cultura en particular
  public async updateOne(
    id: number,
    body: CultureUpdateDTO,
  ): Promise<CultureEntity> {
    try {
      const culture: UpdateResult = await this.cultureRepository.update(
        id,
        body,
      );
      if (!culture.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The culture number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Borrar una cultura (soft)
  public async deleteOne(id: number): Promise<CultureEntity> {
    try {
      const culture: UpdateResult = await this.cultureRepository.update(id, {
        isActive: false,
      });
      if (!culture.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The culture number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
