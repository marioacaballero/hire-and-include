import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { KnowledgeLevelEntity } from '../../knowledge-level/entities/knowledge-level.entity';
import { UserEntity } from '../../../../user/entities/user.entity';

export class SkillDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  level: KnowledgeLevelEntity;

  @IsOptional()
  user: UserEntity;
}

export class SkillUpdateDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  level: KnowledgeLevelEntity;

  @IsOptional()
  user: UserEntity;
}
