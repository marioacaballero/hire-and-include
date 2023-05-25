import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { UserEntity } from '../../../../user/entities/user.entity';

export class GenreDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  user: UserEntity[];
}

export class GenreUpdateDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  user: UserEntity[];
}
