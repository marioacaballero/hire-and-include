import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { ErrorManager } from '../../helpers/error.manager';
import { UserDTO, UserUpdateDTO } from '../dto/user.dto';

export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  //crear un nuevo usuario
  public async createOne(body: UserDTO): Promise<UserEntity> {
    try {
      const user = await this.userRepository.save(body);
      if (!user) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'The user is not created',
        });
      }
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Buscar todas los usuarios de la db
  public async findAll(): Promise<UserEntity[]> {
    try {
      const allusers = await this.userRepository.find();
      if (!allusers.length) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: "We don't have users on database",
        });
      }
      return allusers;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Busca un usuario en particular
  public async findOne(id: number): Promise<UserEntity> {
    try {
      const user = await this.userRepository
        .createQueryBuilder('user')
        .where({ id })
        .getOne();

      if (!user) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The user with ID: ${id} do not exist`,
        });
      }

      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Modificar un usuario en particular
  public async updateOne(id: number, body: UserUpdateDTO): Promise<UserEntity> {
    try {
      const user: UpdateResult = await this.userRepository.update(id, body);
      if (!user.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The user number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Borrar un usuario (soft)
  public async deleteOne(id: number): Promise<UserEntity> {
    try {
      const user: UpdateResult = await this.userRepository.update(id, {
        isActive: false,
      });
      if (!user.affected) {
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The user number ${id} is not in database`,
        });
      }
      return await this.findOne(id);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
