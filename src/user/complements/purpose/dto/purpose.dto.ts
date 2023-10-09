import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { UserEntity } from '../../../../user/entities/user.entity';

export class PurposeDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  motivation: string;

  @IsOptional()
  user: UserEntity[];
}

export class PurposeUpdateDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  motivation: string;

  @IsOptional()
  user: UserEntity[];
}
