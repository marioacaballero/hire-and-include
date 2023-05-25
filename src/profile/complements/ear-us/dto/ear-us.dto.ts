import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ProfileEntity } from '../../../../profile/entities/profile.entity';

export class EarUsDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  profile: ProfileEntity[];
}

export class EarUsUpdateDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  profile: ProfileEntity[];
}
