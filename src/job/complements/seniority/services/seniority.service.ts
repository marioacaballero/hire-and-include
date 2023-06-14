import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { SeniorityEntity } from '../entities/seniority.entity';
import { ErrorManager } from '../../../../helpers/error.manager';
import { SeniorityDTO, SeniorityUpdateDTO } from '../dto/seniority.dto';

export class SeniorityService {
  constructor(
    @InjectRepository(SeniorityEntity)
    private readonly seniorityRepository: Repository<SeniorityEntity>,
  ) {}

  //crear una nueva jerarquia
  public async createOne(body: SeniorityDTO): Promise<SeniorityEntity> {
    try {
      const seniority = await this.seniorityRepository.save(body);
      if (!seniority) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The seniority is not created',
        });
      }
      return seniority;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Buscar todas las jerarquias de la db
  public async findAll(): Promise<SeniorityEntity[]> {
    try {
      const allseniorities = await this.seniorityRepository.find();
      if (!allseniorities.length) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: "We don't have seniorities on database",
        });
      }
      return allseniorities;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Busca una jerarquia en particular
  public async findOne(id: number): Promise<SeniorityEntity> {
    try {
      const seniority = await this.seniorityRepository
        .createQueryBuilder('seniority')
        .where({ id })
        .getOne();

      if (!seniority) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The seniority with ID: ${id} do not exist`,
        });
      }

      return seniority;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Modificar una jerarquia en particular
  public async updateOne(
    id: number,
    body: SeniorityUpdateDTO,
  ): Promise<SeniorityEntity> {
    try {
      const seniority: UpdateResult = await this.seniorityRepository.update(
        id,
        body,
      );
      if (!seniority.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The seniority number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Borrar una jerarquia (soft)
  public async deleteOne(id: number): Promise<SeniorityEntity> {
    try {
      const seniority: UpdateResult = await this.seniorityRepository.update(
        id,
        {
          isActive: false,
        },
      );
      if (!seniority.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The seniority number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
