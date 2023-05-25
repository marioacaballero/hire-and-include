import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { EDUCATIONSTATE } from '../../../../constants/enums/education';
import { EducationLevelEntity } from '../entities/education-level.entity';
import { UserEntity } from '../../../../user/entities/user.entity';

export class EducationDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  institution: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  diploma: string;

  @IsOptional()
  @IsNumber()
  @MaxLength(10)
  graduation_year: number;

  @IsNotEmpty()
  @IsEnum(EDUCATIONSTATE)
  state: EDUCATIONSTATE;

  @IsNotEmpty()
  educationDegree: EducationLevelEntity;

  @IsNotEmpty()
  user: UserEntity;
}

export class EducationUpdateDTO {
  @IsOptional()
  @IsString()
  @MaxLength(30)
  institution: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  diploma: string;

  @IsOptional()
  @IsNumber()
  @MaxLength(10)
  graduation_year: number;

  @IsOptional()
  @IsEnum(EDUCATIONSTATE)
  state: EDUCATIONSTATE;

  @IsOptional()
  educationDegree: EducationLevelEntity;

  @IsOptional()
  user: UserEntity;
}
