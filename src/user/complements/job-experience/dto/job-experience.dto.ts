import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { SeniorityEntity } from '../../../../job/complements/seniority/entities/seniority.entity';
import { UserEntity } from '../../../entities/user.entity';

export class JobExperienceDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  position: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  company: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  performance: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  achievement: string;

  @IsNotEmpty()
  @IsDate()
  @MaxLength(10)
  start: Date;

  @IsNotEmpty()
  @IsDate()
  @MaxLength(10)
  end: Date;

  @IsNotEmpty()
  seniority: SeniorityEntity;

  @IsNotEmpty()
  user: UserEntity;
}

export class JobExperienceUpdateDTO {
  @IsOptional()
  @IsString()
  @MaxLength(20)
  position: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  company: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  performance: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  achievement: string;

  @IsOptional()
  @IsDate()
  @MaxLength(10)
  start: Date;

  @IsOptional()
  @IsDate()
  @MaxLength(10)
  end: Date;

  @IsOptional()
  seniority: SeniorityEntity;

  @IsNotEmpty()
  user: UserEntity;
}
