import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { JobEntity } from '../../../../job/entities/job.entity';

export class CultureDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  job: JobEntity[];
}

export class CultureUpdateDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  job: JobEntity[];
}
