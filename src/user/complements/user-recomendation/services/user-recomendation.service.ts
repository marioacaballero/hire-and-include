import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { UserRecomendationEntity } from '../entities/user-recomendation.entity';
import {
  UserRecomendationDTO,
  UserRecomendationUpdateDTO,
} from '../dto/user-recomendation.dto';
import { ErrorManager } from '../../../../helpers/error.manager';

export class UserRecomendationService {
  constructor(
    @InjectRepository(UserRecomendationEntity)
    private readonly userRecomendationRepository: Repository<UserRecomendationEntity>,
  ) {}

  public async createOne(
    body: UserRecomendationDTO,
  ): Promise<UserRecomendationEntity> {
    try {
      const userRecomendation =
        await this.userRecomendationRepository.save(body);

      if (!userRecomendation)
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The userRecomendation is not created',
        });

      return await this.findOne(userRecomendation.id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findAll(): Promise<UserRecomendationEntity[]> {
    try {
      const allUserRecomendation =
        await this.userRecomendationRepository.find();

      if (!allUserRecomendation.length)
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: "We don't have userRecomendations in database",
        });

      return allUserRecomendation;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findOne(id: string): Promise<UserRecomendationEntity> {
    try {
      const userRecomendation = await this.userRecomendationRepository
        .createQueryBuilder('userRecomendation')
        .where({ id })
        .getOne();

      if (!userRecomendation)
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The userRecomendation with ID: ${id} is not found`,
        });

      return userRecomendation;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async updateOne(
    id: string,
    body: UserRecomendationUpdateDTO,
  ): Promise<UserRecomendationEntity> {
    try {
      const userRecomendation: UpdateResult =
        await this.userRecomendationRepository.update(id, body);

      if (!userRecomendation.affected)
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: `The userRecomendation ID: ${id} is not in database`,
        });

      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async deleteOne(id: string): Promise<UserRecomendationEntity> {
    try {
      const userRecomendation: UpdateResult =
        await this.userRecomendationRepository.update(id, {
          isActive: false,
        });

      if (!userRecomendation.affected)
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: `The userRecomendation ID: ${id} is not in database`,
        });

      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
