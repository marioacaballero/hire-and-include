import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ActivityAreaEntity } from '../../job/complements/activity-area/entities/activity-areas.entity';
import { CompanyEntity } from '../../company/entities/company.entity';
import { ACCESLEVEL, ROLES } from '../../constants/enums/profile';

export class ProfileCompanyDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  firstName: string; //nombre

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  lastName: string; //apellido

  @IsNotEmpty()
  @IsEmail()
  email: string; //correo*

  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(8)
  @IsString()
  password: string; //contraseña*

  @IsNotEmpty()
  @IsString()
  name: string; //nombre de la empresa

  @IsNotEmpty()
  @IsString()
  bussinessName: string; //razon social

  @IsNotEmpty()
  activityArea: ActivityAreaEntity; //area de actividad

  @IsNotEmpty()
  @IsString()
  fiscalCondition: string; //condicion fiscal

  @IsNotEmpty()
  @IsString()
  IDnumber: string; //CUIL/CUIT

  @IsNotEmpty()
  @IsString()
  cityAndCountry: string; //localidad, provincia, pais

  @IsNotEmpty()
  @IsString()
  postalCode: string; //codigo postal

  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string; //telefono

  @IsOptional()
  @IsString()
  socialMedia: string; //RRSS

  @IsOptional()
  @IsString()
  web: string; //sitio web

  @IsOptional()
  @IsBoolean()
  integration: boolean; //apoyo a la integracion

  @IsOptional()
  @IsBoolean()
  news: boolean; //recibir novedades

  @IsOptional()
  @IsBoolean()
  isONG: boolean; //para identificar si es ONG

  @IsOptional()
  company: CompanyEntity;

  @IsOptional()
  @IsEnum(ACCESLEVEL)
  accesLevel: ACCESLEVEL;

  @IsOptional()
  @IsEnum(ROLES)
  rol: ROLES;
}

export class ProfileCompanyUpdateDTO {
  @IsOptional()
  @IsString()
  firstName: string; //nombre

  @IsOptional()
  @IsString()
  lastName: string; //apellido

  @IsOptional()
  @IsEmail()
  email: string; //correo*

  @IsOptional()
  @MinLength(5)
  @MaxLength(13)
  @IsString()
  password: string; //contraseña*

  @IsOptional()
  @IsString()
  name: string; //nombre de la empresa

  @IsOptional()
  @IsString()
  bussinessName: string; //razon social

  @IsOptional()
  activityArea: ActivityAreaEntity; //area de actividad

  @IsOptional()
  @IsString()
  fiscalCondition: string; //condicion fiscal

  @IsOptional()
  @IsString()
  IDnumber: string; //CUIL/CUIT

  @IsOptional()
  @IsString()
  cityAndCountry: string; //localidad, provincia, pais

  @IsOptional()
  @IsString()
  postalCode: string; //codigo postal

  @IsOptional()
  @IsPhoneNumber()
  phone: string; //telefono

  @IsOptional()
  @IsString()
  socialMedia: string; //RRSS

  @IsOptional()
  @IsString()
  web: string; //sitio web

  @IsOptional()
  @IsBoolean()
  integration: boolean; //apoyo a la integracion

  @IsOptional()
  @IsBoolean()
  news: boolean; //recibir novedades

  @IsOptional()
  @IsBoolean()
  isONG: boolean; //para identificar si es ONG

  @IsOptional()
  company: CompanyEntity;

  @IsOptional()
  @IsEnum(ACCESLEVEL)
  accesLevel: ACCESLEVEL;

  @IsOptional()
  @IsEnum(ROLES)
  rol: ROLES;
}
