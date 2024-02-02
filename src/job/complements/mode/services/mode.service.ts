import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { ModeEntity } from '../entities/mode.entity';
import { ErrorManager } from '../../../../helpers/error.manager';
import { ModeDTO } from '../dto/mode.dto';
import { ModeUpdateDTO } from '../dto/mode.dto';

export class ModeService {
  constructor(
    @InjectRepository(ModeEntity)
    private readonly jobmodeRepository: Repository<ModeEntity>,
  ) {}

  //crear una nueva modalidad
  public async createOne(body: ModeDTO): Promise<ModeEntity> {
    try {
      const jobmodeExist = await this.jobmodeRepository.find({
        where: { name: body.name },
      });
      if (jobmodeExist.length) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The job mode exist on database',
        });
      }

      const mode = await this.jobmodeRepository.save(body);
      if (!mode) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The mode is not created',
        });
      }
      return mode;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Buscar todas las modalidads de la db
  public async findAll(): Promise<ModeEntity[]> {
    try {
      const allmodes = await this.jobmodeRepository.find();
      if (!allmodes.length) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: "We don't have modes on database",
        });
      }
      return allmodes;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Busca una modalidad en particular
  public async findOne(id: string): Promise<ModeEntity> {
    try {
      const mode = await this.jobmodeRepository
        .createQueryBuilder('mode')
        .where({ id })
        .getOne();

      if (!mode) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The mode with ID: ${id} do not exist`,
        });
      }

      return mode;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Modificar una modalidad en particular
  public async updateOne(id: string, body: ModeUpdateDTO): Promise<ModeEntity> {
    try {
      const mode: UpdateResult = await this.jobmodeRepository.update(id, body);
      if (!mode.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The mode number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Borrar una modalidad (soft)
  public async deleteOne(id: string): Promise<ModeEntity> {
    try {
      const mode: UpdateResult = await this.jobmodeRepository.update(id, {
        isActive: false,
      });
      if (!mode.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The mode number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
