import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { UserEntity } from '../../../../user/entities/user.entity';
import { LEVELS } from '../../../../constants/enums/levels';

export class LanguageDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(LEVELS)
  knowledgeLevel: LEVELS;

  @IsOptional()
  user: UserEntity;
}

export class LanguageUpdateDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsEnum(LEVELS)
  knowledgeLevel: LEVELS;

  @IsOptional()
  user: UserEntity;
}
