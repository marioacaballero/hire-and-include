import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PositionAreaEntity } from '../entites/position-area.entity';
import {
  PositionAreaDTO,
  PositionAreaUpdateDTO,
} from '../dto/postion-area.dto';
import { ErrorManager } from '../../../../helpers/error.manager';

export class PositionAreaService {
  constructor(
    @InjectRepository(PositionAreaEntity)
    private readonly positionAreaRepository: Repository<PositionAreaEntity>,
  ) {}

  // create one positionArea
  public async createOne(body: PositionAreaDTO): Promise<PositionAreaEntity> {
    try {
      const position = await this.positionAreaRepository.save(body);
      if (!position) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The position-area is not created',
        });
      }
      return await this.findOne(position.id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  // find all positionArea
  public async findAll(): Promise<PositionAreaEntity[]> {
    try {
      const allposition = await this.positionAreaRepository.find();

      if (!allposition.length) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: "We don't have positions on database",
        });
      }

      return allposition;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  // find one positionArea
  public async findOne(id: number): Promise<PositionAreaEntity> {
    try {
      const position = await this.positionAreaRepository
        .createQueryBuilder('position-area')
        .where({ id })
        .leftJoinAndSelect('position-area.subPositionArea', 'subPositionArea')
        .getOne();

      if (!position) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The positionArea with ${id} does't exist on database`,
        });
      }

      return position;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  // update one positionArea
  public async updateOne(
    id: number,
    body: PositionAreaUpdateDTO,
  ): Promise<PositionAreaEntity> {
    try {
      const position: UpdateResult = await this.positionAreaRepository.update(
        id,
        body,
      );
      if (!position.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The positionArea number ${id} is not in database`,
        });
      }

      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  // delete one positionArea
  public async deleteOne(id: number) {
    try {
      const position: UpdateResult = await this.positionAreaRepository.update(
        id,
        { isActive: false },
      );

      if (!position.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The positionArea number ${id} is not in database`,
        });
      }

      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
