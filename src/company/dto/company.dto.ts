import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { ActivityAreaEntity } from '../../job/complements/activity-area/entities/activity-areas.entity';
import { JobEntity } from '../../job/entities/job.entity';
import { ProfileEntity } from '../../profile/entities/profile.entity';

export class CompanyDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  name: string;

  @IsOptional()
  @IsString()
  logo: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  bussinessName: string;

  @IsNotEmpty()
  @IsNumber()
  @MaxLength(11)
  IDnumber: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  address: string;

  @IsNotEmpty()
  @IsNumber()
  @MaxLength(20)
  phone: number;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  web: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  socialMedia: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  cityAndCountry: string;

  @IsNotEmpty()
  @IsBoolean()
  isONG: boolean;

  @IsNotEmpty()
  activityArea: ActivityAreaEntity;

  @IsNotEmpty()
  profile: ProfileEntity;

  @IsOptional()
  job: JobEntity[];
}

export class CompanyUpdateDTO {
  @IsOptional()
  @IsString()
  @MaxLength(20)
  name: string;

  @IsOptional()
  @IsString()
  logo: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  bussinessName: string;

  @IsOptional()
  @IsNumber()
  @MaxLength(11)
  IDnumber: number;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  address: string;

  @IsOptional()
  @IsNumber()
  @MaxLength(20)
  phone: number;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  web: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  socialMedia: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  cityAndCountry: string;

  @IsOptional()
  @IsBoolean()
  isONG: boolean;

  @IsOptional()
  activityArea: ActivityAreaEntity;

  @IsOptional()
  profile: ProfileEntity;

  @IsOptional()
  job: JobEntity[];
}
