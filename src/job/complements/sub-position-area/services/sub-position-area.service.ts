import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { SubPositionAreaEntity } from '../entities/sub-position-area.entity';
import {
  SubPositionAreaDTO,
  SubPositionAreaUpdateDTO,
} from '../dto/sub-position-area.dto';
import { ErrorManager } from '../../../../helpers/error.manager';
import { PositionAreaService } from '../../position-area/services/position-area.service';

export class SubPositionAreaService {
  constructor(
    @InjectRepository(SubPositionAreaEntity)
    private readonly subPositionAreaRepository: Repository<SubPositionAreaEntity>,
    private readonly positionAreaService: PositionAreaService,
  ) {}

  // create one subPositionArea
  public async createOne(
    body: SubPositionAreaDTO,
  ): Promise<SubPositionAreaEntity> {
    await this.positionAreaService.findOne(body.positionArea.id);
    try {
      const subPosition = await this.subPositionAreaRepository.save(body);
      if (!subPosition) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The sub-position-area is not created',
        });
      }
      return await this.findOne(subPosition.id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  // find all subPositionArea
  public async findAll(): Promise<SubPositionAreaEntity[]> {
    try {
      const allSubPosition = await this.subPositionAreaRepository.find();

      if (!allSubPosition.length) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: "We don't have subPositions on database",
        });
      }

      return allSubPosition;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  // find one subPositionArea
  public async findOne(id: number): Promise<SubPositionAreaEntity> {
    try {
      const subPosition = await this.subPositionAreaRepository
        .createQueryBuilder('sub-position-area')
        .where({ id })
        .getOne();

      if (!subPosition) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The subPositionArea with ${id} does't exist on database`,
        });
      }

      return subPosition;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  // update one subPositionArea
  public async updateOne(
    id: number,
    body: SubPositionAreaUpdateDTO,
  ): Promise<SubPositionAreaEntity> {
    try {
      const subPosition: UpdateResult =
        await this.subPositionAreaRepository.update(id, body);
      if (!subPosition.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The subPositionArea number ${id} is not in database`,
        });
      }

      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  // delete one subPositionArea
  public async deleteOne(id: number) {
    try {
      const subPosition: UpdateResult =
        await this.subPositionAreaRepository.update(id, { isActive: false });

      if (!subPosition.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The subPositionArea number ${id} is not in database`,
        });
      }

      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
