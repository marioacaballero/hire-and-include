import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { SeniorityEntity } from '../complements/seniority/entities/seniority.entity';
import { ChargeEntity } from '../complements/charge/entities/charge.entity';
import { JobRelationEntity } from '../complements/job-relation/entities/job-relation.entity';
import { ModeEntity } from '../complements/mode/entities/mode.entity';
import { DisabilityEntity } from '../../user/complements/disability/entities/disability.entity';
import { CompanyEntity } from '../../company/entities/company.entity';
import { JobUserEntity } from '../entities/job-user.entity';
import { CultureEntity } from '../complements/culture/entities/culture.entity';

export class JobDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(1000)
  about: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  salary: string;

  @IsNotEmpty()
  @IsString()
  requirements: string;

  @IsNotEmpty()
  @IsString()
  tasks: string;

  @IsNotEmpty()
  @IsString()
  inclusionProgram: string;

  @IsNotEmpty()
  @IsString()
  benefits: string;

  @IsNotEmpty()
  @IsString()
  work_schedule: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  city: string;

  @IsNotEmpty()
  @IsBoolean()
  minority: boolean;

  @IsNotEmpty()
  @IsString()
  @MaxLength(60)
  minorityDetail: string;

  @IsNotEmpty()
  seniority: SeniorityEntity;

  @IsNotEmpty()
  type: ChargeEntity;

  @IsNotEmpty()
  culture: CultureEntity;

  @IsNotEmpty()
  jobRelation: JobRelationEntity;

  @IsNotEmpty()
  jobMode: ModeEntity;

  @IsOptional()
  disability: DisabilityEntity;

  @IsNotEmpty()
  company: CompanyEntity;

  @IsOptional()
  jobUser: JobUserEntity[];
}

export class JobUpdateDTO {
  @IsOptional()
  @IsString()
  @MaxLength(20)
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  about: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  salary: string;

  @IsOptional()
  @IsString()
  requirements: string;

  @IsOptional()
  @IsString()
  tasks: string;

  @IsOptional()
  @IsString()
  inclusionProgram: string;

  @IsOptional()
  @IsString()
  benefits: string;

  @IsOptional()
  @IsString()
  work_schedule: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  city: string;

  @IsOptional()
  @IsBoolean()
  minority: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(60)
  minorityDetail: string;

  @IsOptional()
  seniority: SeniorityEntity;

  @IsOptional()
  type: ChargeEntity;

  @IsOptional()
  culture: CultureEntity;

  @IsOptional()
  jobRelation: JobRelationEntity;

  @IsOptional()
  jobMode: ModeEntity;

  @IsOptional()
  disability: DisabilityEntity;

  @IsNotEmpty()
  company: CompanyEntity;

  @IsOptional()
  jobUser: JobUserEntity[];
}
