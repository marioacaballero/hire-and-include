import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { LanguageEntity } from '../../language/entities/language.entity';
import { SkillEntity } from '../../skill/entities/skill.entity';

export class KnowledgeLevelDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  language: LanguageEntity[];

  @IsOptional()
  skill: SkillEntity[];
}
export class KnowledgeLevelUpdateDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  language: LanguageEntity[];

  @IsOptional()
  skill: SkillEntity[];
}
