import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { UserEntity } from '../../../../user/entities/user.entity';

export class PurposeDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  user: UserEntity[];
}

export class PurposeUpdateDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  user: UserEntity[];
}
