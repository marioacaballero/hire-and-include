import { InjectRepository } from '@nestjs/typeorm';
import { LanguageEntity } from '../entities/language.entity';
import { Repository, UpdateResult } from 'typeorm';
import { ErrorManager } from '../../../../helpers/error.manager';
import { LanguageDTO, LanguageUpdateDTO } from '../dto/lenguage.dto';

export class LanguageService {
  constructor(
    @InjectRepository(LanguageEntity)
    private readonly languageRepository: Repository<LanguageEntity>,
  ) {}

  //crear un nuevo idioma
  public async createOne(body: LanguageDTO): Promise<LanguageEntity> {
    try {
      const language = await this.languageRepository.save(body);
      if (!language) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The language is not created',
        });
      }
      return language;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Buscar todas los idiomas de la db
  public async findAll(): Promise<LanguageEntity[]> {
    try {
      const alllanguages = await this.languageRepository.find();
      if (!alllanguages.length) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: "We don't have languages on database",
        });
      }
      return alllanguages;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Busca un idioma en particular
  public async findOne(id: string): Promise<LanguageEntity> {
    try {
      const language = await this.languageRepository
        .createQueryBuilder('language')
        .where({ id })
        .getOne();

      if (!language) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The language with ID: ${id} do not exist`,
        });
      }

      return language;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Modificar un idioma en particular
  public async updateOne(
    id: string,
    body: LanguageUpdateDTO,
  ): Promise<LanguageEntity> {
    try {
      const language: UpdateResult = await this.languageRepository.update(
        id,
        body,
      );
      if (!language.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The language number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Borrar un idioma (soft)
  public async deleteOne(id: string): Promise<LanguageEntity> {
    try {
      const language: UpdateResult = await this.languageRepository.update(id, {
        isActive: false,
      });
      if (!language.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The language number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
