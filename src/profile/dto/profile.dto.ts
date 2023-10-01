import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ACCESLEVEL, PROFILETYPE } from '../../constants/enums/profile';
import { EarUsEntity } from '../complements/ear-us/entities/ear-us.entity';
import { CompanyEntity } from '../../company/entities/company.entity';
import { UserEntity } from '../../user/entities/user.entity';

export class ProfileDTO {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @MaxLength(50)
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(8)
  password: string;

  @IsNotEmpty()
  @IsEnum(PROFILETYPE)
  profileType: PROFILETYPE;

  @IsOptional()
  @IsEnum(ACCESLEVEL)
  accesLevel: ACCESLEVEL;

  @IsNotEmpty()
  earUs: EarUsEntity;

  @IsOptional()
  companyProfile: CompanyEntity;

  @IsOptional()
  userProfile: UserEntity;
}

export class ProfileUpdateDTO {
  @IsOptional()
  @IsString()
  @IsEmail()
  @MaxLength(50)
  email: string;

  @IsOptional()
  @IsString()
  @MinLength(4)
  @MaxLength(8)
  password: string;

  @IsOptional()
  @IsEnum(PROFILETYPE)
  profileType: PROFILETYPE;

  @IsOptional()
  @IsEnum(ACCESLEVEL)
  accesLevel: ACCESLEVEL;

  @IsOptional()
  earUs: EarUsEntity;

  @IsOptional()
  companyProfile: CompanyEntity;

  @IsOptional()
  userProfile: UserEntity;
}
