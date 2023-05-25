import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { JobEntity } from '../../../../job/entities/job.entity';

export class ChargeDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  job: JobEntity[];
}

export class ChargeUpdateDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  job: JobEntity[];
}
