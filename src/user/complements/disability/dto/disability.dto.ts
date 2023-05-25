import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { JobEntity } from '../../../../job/entities/job.entity';
import { UserEntity } from '../../../../user/entities/user.entity';

export class DisabilityDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  user: UserEntity[];

  @IsOptional()
  job: JobEntity[];
}

export class DisabilityUpdateDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  user: UserEntity[];

  @IsOptional()
  job: JobEntity[];
}
