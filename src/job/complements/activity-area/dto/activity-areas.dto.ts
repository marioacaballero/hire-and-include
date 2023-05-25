import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CompanyEntity } from '../../../../company/entities/company.entity';

export class ActivityAreaDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  company: CompanyEntity[];
}

export class ActivityAreaUpdateDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  company: CompanyEntity[];
}
