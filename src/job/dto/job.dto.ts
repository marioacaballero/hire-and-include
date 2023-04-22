import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import {
  JOBTYPECONTRACT,
  JOBTYPECULTURE,
  JOBTYPEINCLUSIVE,
  JOBTYPELOCATION,
  JOBTYPESENIORITY,
  JOBTYPETIME,
} from '../../constants/enums/jobtype';

export class jobDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  about: string;

  @IsNotEmpty()
  @IsEnum(JOBTYPESENIORITY)
  seniority: JOBTYPESENIORITY;

  @IsNotEmpty()
  @IsEnum(JOBTYPETIME)
  type: JOBTYPETIME;

  @IsNotEmpty()
  @IsEnum(JOBTYPELOCATION)
  location: JOBTYPELOCATION;

  @IsOptional()
  @IsString()
  salary: string;

  @IsNotEmpty()
  @IsEnum(JOBTYPECONTRACT)
  contract: JOBTYPECONTRACT;

  @IsNotEmpty()
  @IsEnum(JOBTYPEINCLUSIVE)
  inclusive: JOBTYPEINCLUSIVE;

  @IsNotEmpty()
  @IsEnum(JOBTYPECULTURE)
  culture: JOBTYPECULTURE;

  @IsNotEmpty()
  @IsString()
  requirements: string;

  @IsNotEmpty()
  @IsString()
  tasks: string;

  @IsOptional()
  @IsString()
  benefits: string;

  @IsOptional()
  @IsString()
  work_schedule: string;
}

export class jobUpdateDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  about: string;

  @IsOptional()
  @IsEnum(JOBTYPESENIORITY)
  seniority: JOBTYPESENIORITY;

  @IsOptional()
  @IsEnum(JOBTYPETIME)
  type: JOBTYPETIME;

  @IsOptional()
  @IsEnum(JOBTYPELOCATION)
  location: JOBTYPELOCATION;

  @IsOptional()
  @IsString()
  salary: string;

  @IsOptional()
  @IsEnum(JOBTYPECONTRACT)
  contract: JOBTYPECONTRACT;

  @IsOptional()
  @IsEnum(JOBTYPEINCLUSIVE)
  inclusive: JOBTYPEINCLUSIVE;

  @IsOptional()
  @IsEnum(JOBTYPECULTURE)
  culture: JOBTYPECULTURE;

  @IsOptional()
  @IsString()
  requirements: string;

  @IsOptional()
  @IsString()
  tasks: string;

  @IsOptional()
  @IsString()
  benefits: string;

  @IsOptional()
  @IsString()
  work_schedule: string;
}
