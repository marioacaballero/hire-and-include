import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ACCESLEVEL, ID_TYPE, ROLES } from '../../constants/enums/profile';
import { EarUsEntity } from '../complements/ear-us/entities/ear-us.entity';
import { CompanyEntity } from '../../company/entities/company.entity';
import { UserEntity } from '../../user/entities/user.entity';

export class ProfileDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  lastName: string;

  @IsNotEmpty()
  @IsEnum(ID_TYPE)
  IDnumberType: ID_TYPE;

  @IsNotEmpty()
  @IsString()
  IDnumber: string;

  @IsNotEmpty()
  @IsString()
  cityAndCountry: string;

  @IsNotEmpty()
  @IsDate()
  birthdate: Date;

  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;

  @IsOptional()
  @IsString()
  socialMedia: string;

  @IsOptional()
  @IsString()
  about: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(50)
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(8)
  password: string;

  @IsOptional()
  @IsEnum(ACCESLEVEL)
  accesLevel: ACCESLEVEL;

  @IsOptional()
  @IsEnum(ROLES)
  rol: ROLES;

  @IsOptional()
  earUs: EarUsEntity;

  @IsOptional()
  companyProfile: CompanyEntity;

  @IsOptional()
  userProfile: UserEntity;

  @IsOptional()
  @IsBoolean()
  news: boolean; //recibir novedades
}

export class ProfileUpdateDTO {
  @IsOptional()
  @IsString()
  @MaxLength(20)
  firstName: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  lastName: string;

  @IsOptional()
  @IsEnum(ID_TYPE)
  IDnumberType: ID_TYPE;

  @IsOptional()
  @IsString()
  IDnumber: string;

  @IsOptional()
  @IsString()
  cityAndCountry: string;

  @IsOptional()
  @IsDate()
  birthdate: Date;

  @IsOptional()
  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  socialMedia: string;

  @IsOptional()
  @IsString()
  about: string;

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
  @IsEnum(ACCESLEVEL)
  accesLevel: ACCESLEVEL;

  @IsOptional()
  @IsEnum(ROLES)
  rol: ROLES;

  @IsOptional()
  earUs: EarUsEntity;

  @IsOptional()
  companyProfile: CompanyEntity;

  @IsOptional()
  userProfile: UserEntity;

  @IsOptional()
  @IsBoolean()
  news: boolean; //recibir novedades
}
