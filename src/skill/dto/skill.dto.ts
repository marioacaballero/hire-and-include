import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { LEVELS } from '../../constants/enums/levels';

export class SkillDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(LEVELS)
  level: LEVELS;
}
