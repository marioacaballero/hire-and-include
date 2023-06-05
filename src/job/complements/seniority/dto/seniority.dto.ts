import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { JobEntity } from '../../../../job/entities/job.entity';
import { JobExperienceEntity } from '../../../../user/complements/job-experience/entities/job-experience.entity';

export class SeniorityDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  jobExperience: JobExperienceEntity[];

  @IsOptional()
  job: JobEntity[];
}

export class SeniorityUpdateDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  jobExperience: JobExperienceEntity[];

  @IsOptional()
  job: JobEntity[];
}
