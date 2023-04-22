import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  USER_GENDER,
  USER_GENERATIONS,
  USER_LIMITATION,
  USER_PURPOSES,
} from '../../constants/enums/user';
import { LEVELS } from '../../constants/enums/levels';

export class UserDTO {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  passwors: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsDate()
  birthdate: Date;

  @IsOptional()
  @IsNumber()
  phone: number;

  @IsOptional()
  @IsString()
  nationality: string;

  @IsOptional()
  @IsString()
  socialMedia: string;

  @IsOptional()
  @IsString()
  about: string;

  @IsOptional()
  @IsBoolean()
  isPublic: boolean;

  @IsOptional()
  @IsBoolean()
  minority: boolean;

  @IsOptional()
  @IsString()
  minorityDetail: string;

  @IsOptional()
  @IsEnum(USER_PURPOSES)
  purpose: USER_PURPOSES;

  @IsOptional()
  @IsEnum(USER_GENERATIONS)
  generation: USER_GENERATIONS;

  @IsOptional()
  @IsEnum(USER_GENDER)
  gender: USER_GENDER;

  @IsOptional()
  @IsEnum(USER_LIMITATION)
  limitation: USER_LIMITATION;

  @IsOptional()
  @IsEnum(LEVELS)
  limitation_level: LEVELS;
}

export class UserUpdateDTO {
  @IsOptional()
  @IsString()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  passwors: string;

  @IsOptional()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsDate()
  birthdate: Date;

  @IsOptional()
  @IsNumber()
  phone: number;

  @IsOptional()
  @IsString()
  nationality: string;

  @IsOptional()
  @IsString()
  socialMedia: string;

  @IsOptional()
  @IsString()
  about: string;

  @IsOptional()
  @IsBoolean()
  isPublic: boolean;

  @IsOptional()
  @IsBoolean()
  minority: boolean;

  @IsOptional()
  @IsString()
  minorityDetail: string;

  @IsOptional()
  @IsEnum(USER_PURPOSES)
  purpose: USER_PURPOSES;

  @IsOptional()
  @IsEnum(USER_GENERATIONS)
  generation: USER_GENERATIONS;

  @IsOptional()
  @IsEnum(USER_GENDER)
  gender: USER_GENDER;

  @IsOptional()
  @IsEnum(USER_LIMITATION)
  limitation: USER_LIMITATION;

  @IsOptional()
  @IsEnum(LEVELS)
  limitation_level: LEVELS;
}
