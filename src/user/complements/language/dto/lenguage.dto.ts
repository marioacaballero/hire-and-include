import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { LEVELS } from '../../../../constants/enums/levels';

export class LenguageDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(LEVELS)
  level: LEVELS;
}

export class LenguageUpdateDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsEnum(LEVELS)
  level: LEVELS;
}
