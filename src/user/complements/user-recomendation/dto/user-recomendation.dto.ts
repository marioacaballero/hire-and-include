import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { UserEntity } from '../../../../user/entities/user.entity';

export class UserRecomendationDTO {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  user: UserEntity;
}

export class UserRecomendationUpdateDTO {
  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  user: UserEntity;
}
