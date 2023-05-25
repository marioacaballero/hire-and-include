import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { KnowledgeLevelEntity } from '../../knowledge-level/entities/knowledge-level.entity';
import { UserEntity } from '../../../../user/entities/user.entity';

export class LenguageDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  level: KnowledgeLevelEntity;

  @IsOptional()
  user: UserEntity;
}

export class LenguageUpdateDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  level: KnowledgeLevelEntity;

  @IsOptional()
  user: UserEntity;
}
