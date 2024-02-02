import { InjectRepository } from '@nestjs/typeorm';
import { DisabilityEntity } from '../entities/disability.entity';
import { Repository, UpdateResult } from 'typeorm';
import { ErrorManager } from '../../../../helpers/error.manager';
import { DisabilityDTO, DisabilityUpdateDTO } from '../dto/disability.dto';

export class DisabilityService {
  constructor(
    @InjectRepository(DisabilityEntity)
    private readonly disabilityRepository: Repository<DisabilityEntity>,
  ) {}

  //crear una nueva discapacidad
  public async createOne(body: DisabilityDTO): Promise<DisabilityEntity> {
    try {
      const disability = await this.disabilityRepository.save(body);
      if (!disability) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The disability is not created',
        });
      }
      return disability;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Buscar todas los discapacidads de la db
  public async findAll(): Promise<DisabilityEntity[]> {
    try {
      const alldisabilities = await this.disabilityRepository.find();
      if (!alldisabilities.length) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: "We don't have disabilitys on database",
        });
      }
      return alldisabilities;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Busca una discapacidad en particular
  public async findOne(id: string): Promise<DisabilityEntity> {
    try {
      const disability = await this.disabilityRepository
        .createQueryBuilder('disability')
        .where({ id })
        .getOne();

      if (!disability) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The disability with ID: ${id} do not exist`,
        });
      }

      return disability;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Modificar una discapacidad en particular
  public async updateOne(
    id: string,
    body: DisabilityUpdateDTO,
  ): Promise<DisabilityEntity> {
    try {
      const disability: UpdateResult = await this.disabilityRepository.update(
        id,
        body,
      );
      if (!disability.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The disability number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Borrar una discapacidad (soft)
  public async deleteOne(id: string): Promise<DisabilityEntity> {
    try {
      const disability: UpdateResult = await this.disabilityRepository.update(
        id,
        {
          isActive: false,
        },
      );
      if (!disability.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The disability number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
