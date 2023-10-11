import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CompanyEntity } from '../../../../company/entities/company.entity';
import { UserEntity } from '../../../../user/entities/user.entity';

export class RecomendationDTO {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  company: CompanyEntity;

  @IsNotEmpty()
  @IsString()
  user: UserEntity;
}

export class RecomendationUpdateDTO {
  @IsOptional()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  company: CompanyEntity;

  @IsNotEmpty()
  @IsString()
  user: UserEntity;
}
