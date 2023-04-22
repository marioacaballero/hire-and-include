import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CompanyDTO {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  bussinessName: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsOptional()
  @IsNumber()
  phone: number;

  @IsNotEmpty()
  @IsString()
  web: string;

  @IsOptional()
  @IsString()
  socialMedia: string;
}

export class CompanyUpdateDTO {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  bussinessName: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsOptional()
  @IsNumber()
  phone: number;

  @IsNotEmpty()
  @IsString()
  web: string;

  @IsOptional()
  @IsString()
  socialMedia: string;
}
