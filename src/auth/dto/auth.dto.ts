import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CompanyEntity } from '../../company/entities/company.entity';
import { ACCESLEVEL, PROFILETYPE } from '../../constants/enums/profile';
import { EarUsEntity } from '../../profile/complements/ear-us/entities/ear-us.entity';
import { UserEntity } from '../../user/entities/user.entity';

export class AuthDTO {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @MaxLength(50)
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(12)
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
