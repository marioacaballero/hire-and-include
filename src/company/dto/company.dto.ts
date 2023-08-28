import {
  IsBoolean,
  IsNotEmpty,
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
  @IsString()
  @MaxLength(11)
  IDnumber: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  address: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  phone: string;

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

  @IsOptional()
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
  @IsString()
  @MaxLength(11)
  IDnumber: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  address: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  phone: string;

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

  @IsNotEmpty()
  profile: ProfileEntity;

  @IsOptional()
  job: JobEntity[];
}
