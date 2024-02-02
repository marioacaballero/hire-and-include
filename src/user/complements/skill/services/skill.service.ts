import { InjectRepository } from '@nestjs/typeorm';
import { SkillEntity } from '../entities/skill.entity';
import { Repository, UpdateResult } from 'typeorm';
import { SkillDTO, SkillUpdateDTO } from '../dto/skill.dto';
import { ErrorManager } from '../../../../helpers/error.manager';

export class SkillService {
  constructor(
    @InjectRepository(SkillEntity)
    private readonly skillRepository: Repository<SkillEntity>,
  ) {}

  //crear un nuevo conocimiento
  public async createSkill(body: SkillDTO): Promise<SkillEntity> {
    try {
      const skill = await this.skillRepository.save(body);
      if (!skill) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The skill is not created',
        });
      }
      return skill;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Buscar todas los conocimientos de la db
  public async findAllSkills(): Promise<SkillEntity[]> {
    try {
      const allSkills = await this.skillRepository.find();
      if (!allSkills.length) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: "We don't have skills on database",
        });
      }
      return allSkills;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Busca un conocimiento en particular
  public async findOneSkill(id: string): Promise<SkillEntity> {
    try {
      const skill = await this.skillRepository
        .createQueryBuilder('skills')
        .where({ id })
        .getOne();

      if (!skill) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The skill with ID: ${id} do not exist`,
        });
      }

      return skill;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Modificar un conocimiento en particular
  public async updateOneSkill(
    id: string,
    body: SkillUpdateDTO,
  ): Promise<SkillEntity> {
    try {
      const skill: UpdateResult = await this.skillRepository.update(id, body);
      if (!skill.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The skill number ${id} is not in database`,
        });
      }
      return await this.findOneSkill(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Borrar un conocimiento (soft)
  public async deleteOneSkill(id: string): Promise<SkillEntity> {
    try {
      const skill: UpdateResult = await this.skillRepository.update(id, {
        isActive: false,
      });
      if (!skill.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The skill number ${id} is not in database`,
        });
      }
      return await this.findOneSkill(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
