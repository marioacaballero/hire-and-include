import { InjectRepository } from '@nestjs/typeorm';
import { KnowledgeLevelEntity } from '../entities/knowledge-level.entity';
import { Repository, UpdateResult } from 'typeorm';
import { ErrorManager } from '../../../../helpers/error.manager';
import {
  KnowledgeLevelDTO,
  KnowledgeLevelUpdateDTO,
} from '../dto/knowledge-level.dto';

export class KnowledgeLevelService {
  constructor(
    @InjectRepository(KnowledgeLevelEntity)
    private readonly knowledgeRepository: Repository<KnowledgeLevelEntity>,
  ) {}

  //crear un nuevo nivel de conocimiento
  public async createOne(
    body: KnowledgeLevelDTO,
  ): Promise<KnowledgeLevelEntity> {
    try {
      const knowledgelvl = await this.knowledgeRepository.save(body);
      if (!knowledgelvl) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The knowledgelvl is not created',
        });
      }
      return knowledgelvl;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Buscar todos los nivel de conocimientos de la db
  public async findAll(): Promise<KnowledgeLevelEntity[]> {
    try {
      const allknowledgelvls = await this.knowledgeRepository.find();
      if (!allknowledgelvls.length) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: "We don't have knowledgelvls on database",
        });
      }
      return allknowledgelvls;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Busca un nivel de conocimiento en particular
  public async findOne(id: string): Promise<KnowledgeLevelEntity> {
    try {
      const knowledgelvl = await this.knowledgeRepository
        .createQueryBuilder('knowledge-level')
        .where({ id })
        .getOne();

      if (!knowledgelvl) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The knowledgelvl with ID: ${id} do not exist`,
        });
      }

      return knowledgelvl;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Modificar un nivel de conocimiento en particular
  public async updateOne(
    id: string,
    body: KnowledgeLevelUpdateDTO,
  ): Promise<KnowledgeLevelEntity> {
    try {
      const knowledgelvl: UpdateResult = await this.knowledgeRepository.update(
        id,
        body,
      );
      if (!knowledgelvl.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The knowledgelvl number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Borrar un nivel de conocimiento (soft)
  public async deleteOne(id: string): Promise<KnowledgeLevelEntity> {
    try {
      const knowledgelvl: UpdateResult = await this.knowledgeRepository.update(
        id,
        {
          isActive: false,
        },
      );
      if (!knowledgelvl.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The knowledgelvl number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
