import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { LEVELS } from '../../../../constants/enums/levels';

export class SkillDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(LEVELS)
  level: LEVELS;
}

export class SkillUpdateDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsEnum(LEVELS)
  level: LEVELS;
}
