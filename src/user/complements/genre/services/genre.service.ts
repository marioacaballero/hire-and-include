import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { GenreEntity } from '../entities/genre.entity';
import { ErrorManager } from '../../../../helpers/error.manager';
import { GenreDTO, GenreUpdateDTO } from '../dto/genre.dto';

export class GenreService {
  constructor(
    @InjectRepository(GenreEntity)
    private readonly genreRepository: Repository<GenreEntity>,
  ) {}

  //crear un nuevo genero
  public async createOne(body: GenreDTO): Promise<GenreEntity> {
    try {
      const genre = await this.genreRepository.save(body);
      if (!genre) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The genre is not created',
        });
      }
      return genre;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Buscar todas los generos de la db
  public async findAll(): Promise<GenreEntity[]> {
    try {
      const allgenres = await this.genreRepository.find();
      if (!allgenres.length) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: "We don't have genres on database",
        });
      }
      return allgenres;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Busca un genero en particular
  public async findOne(id: string): Promise<GenreEntity> {
    try {
      const genre = await this.genreRepository
        .createQueryBuilder('genres')
        .where({ id })
        .getOne();

      if (!genre) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The genre with ID: ${id} do not exist`,
        });
      }

      return genre;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Modificar un genero en particular
  public async updateOne(
    id: string,
    body: GenreUpdateDTO,
  ): Promise<GenreEntity> {
    try {
      const genre: UpdateResult = await this.genreRepository.update(id, body);
      if (!genre.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The genre number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Borrar un genero (soft)
  public async deleteOne(id: string): Promise<GenreEntity> {
    try {
      const genre: UpdateResult = await this.genreRepository.update(id, {
        isActive: false,
      });
      if (!genre.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The genre number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
