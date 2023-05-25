import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { JobEntity } from '../../../../job/entities/job.entity';

export class JobRelationDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  job: JobEntity[];
}

export class JobRelationUpdateDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  job: JobEntity[];
}
