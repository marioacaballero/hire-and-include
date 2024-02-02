import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RecomendationEntity } from '../entities/recomendation.entity';
import {
  RecomendationDTO,
  RecomendationUpdateDTO,
} from '../dto/recomendation.dto';
import { CompanyService } from '../../../../company/services/company.service';
import { UserService } from '../../../../user/services/user.service';
import { ErrorManager } from '../../../../helpers/error.manager';

export class RecomendationService {
  constructor(
    @InjectRepository(RecomendationEntity)
    private readonly recomendationRepository: Repository<RecomendationEntity>,
    private readonly companyService: CompanyService,
    private readonly userService: UserService,
  ) {}

  public async createOne(body: RecomendationDTO): Promise<RecomendationEntity> {
    await this.companyService.findOne(body.company.id);

    await this.userService.findOne(body.user.id);

    try {
      const recomendation = await this.recomendationRepository.save(body);

      if (!recomendation) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The recomendation is not created',
        });
      }

      return await this.findOne(recomendation.id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findAll(): Promise<RecomendationEntity[]> {
    try {
      const allRecomendations = await this.recomendationRepository.find();

      if (!allRecomendations.length) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: "We don't have recomendations on database",
        });
      }

      return allRecomendations;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findOne(id: string): Promise<RecomendationEntity> {
    try {
      const recomendation = await this.recomendationRepository
        .createQueryBuilder('recomendation')
        .where({ id })
        .getOne();

      if (!recomendation) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The recomendation with ID: ${id} is not found`,
        });
      }

      return recomendation;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async updateOne(
    id: string,
    body: RecomendationUpdateDTO,
  ): Promise<RecomendationEntity> {
    try {
      const recomendation: UpdateResult =
        await this.recomendationRepository.update(id, body);

      if (!recomendation.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The recomendation number ${id} is not in database`,
        });
      }

      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async deleteOne(id: string): Promise<RecomendationEntity> {
    try {
      const recomendation: UpdateResult =
        await this.recomendationRepository.update(id, { isActive: false });

      if (!recomendation.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The recomendation number ${id} is not in database`,
        });
      }

      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
