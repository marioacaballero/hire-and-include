import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PositionAreaEntity } from '../../position-area/entites/position-area.entity';

export class SubPositionAreaDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  positionArea: PositionAreaEntity;
}

export class SubPositionAreaUpdateDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  positionArea: PositionAreaEntity;
}
