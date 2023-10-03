import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class PositionAreaDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
}

export class PositionAreaUpdateDTO {
  @IsOptional()
  @IsString()
  name: string;
}
