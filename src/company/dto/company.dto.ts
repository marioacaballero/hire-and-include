import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { JobEntity } from '../../job/entities/job.entity';
import { ProfileCompanyEntity } from '../../profile/entities/profile-company.entity';

export class CompanyDTO {
  @IsOptional()
  @IsString()
  logo: string;

  @IsOptional()
  @IsBoolean()
  escort: boolean;

  @IsNotEmpty()
  profile: ProfileCompanyEntity;

  @IsOptional()
  job: JobEntity[];
}

export class CompanyUpdateDTO {
  @IsOptional()
  @IsString()
  logo: string;

  @IsOptional()
  @IsBoolean()
  escort: boolean;

  @IsNotEmpty()
  profile: ProfileCompanyEntity;

  @IsOptional()
  job: JobEntity[];
}
