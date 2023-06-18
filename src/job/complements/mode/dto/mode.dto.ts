import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { JobEntity } from '../../../entities/job.entity';

export class ModeDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  job: JobEntity[];
}

export class ModeUpdateDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  job: JobEntity[];
}
