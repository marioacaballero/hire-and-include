import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { ActivityAreaEntity } from '../entities/activity-areas.entity';
import { ErrorManager } from '../../../../helpers/error.manager';
import {
  ActivityAreaDTO,
  ActivityAreaUpdateDTO,
} from '../dto/activity-areas.dto';

export class ActivityAreaService {
  constructor(
    @InjectRepository(ActivityAreaEntity)
    private readonly activityRepository: Repository<ActivityAreaEntity>,
  ) {}

  //crear una nueva area
  public async createOne(body: ActivityAreaDTO): Promise<ActivityAreaEntity> {
    try {
      const activityExist = await this.activityRepository.find({
        where: { name: body.name },
      });
      if (activityExist.length) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The activity area exist on database',
        });
      }

      const activity = await this.activityRepository.save(body);
      if (!activity) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The activity is not created',
        });
      }
      return activity;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Buscar todas las areas de la db
  public async findAll(): Promise<ActivityAreaEntity[]> {
    try {
      const allactivities = await this.activityRepository.find({
        where: { isActive: true },
      });
      if (!allactivities.length) {
        throw new ErrorManager({
          type: 'OK',
          message: "We don't have activities on database",
        });
      }
      return allactivities;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Busca un area en particular
  public async findOne(id: number): Promise<ActivityAreaEntity> {
    try {
      const activity = await this.activityRepository
        .createQueryBuilder('activity')
        .where({ id })
        .getOne();

      if (!activity) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The activity with ID: ${id} do not exist`,
        });
      }

      return activity;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Modificar un area en particular
  public async updateOne(
    id: number,
    body: ActivityAreaUpdateDTO,
  ): Promise<ActivityAreaEntity> {
    try {
      const activity: UpdateResult = await this.activityRepository.update(
        id,
        body,
      );
      if (!activity.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The activity number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Borrar un area (soft)
  public async deleteOne(id: number): Promise<ActivityAreaEntity> {
    try {
      const activity: UpdateResult = await this.activityRepository.update(id, {
        isActive: false,
      });
      if (!activity.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The activity number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
