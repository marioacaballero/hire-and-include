import { IsNotEmpty } from 'class-validator';
import { UserEntity } from '../../user/entities/user.entity';

export class JobUserDTO {
  @IsNotEmpty()
  user: UserEntity;
}
