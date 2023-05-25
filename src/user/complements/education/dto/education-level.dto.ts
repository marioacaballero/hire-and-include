import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { EducationEntity } from '../entities/education.entity';

export class EducationLevelDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  education: EducationEntity[];
}

export class EducationLevelUpdateDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  education: EducationEntity[];
}
