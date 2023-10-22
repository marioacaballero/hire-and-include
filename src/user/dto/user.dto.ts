import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { JOB_STATE } from '../../constants/enums/user';
import { LanguageEntity } from '../complements/language/entities/language.entity';
import { SkillEntity } from '../complements/skill/entities/skill.entity';
import { EducationEntity } from '../complements/education/entities/education.entity';
import { JobExperienceEntity } from '../complements/job-experience/entities/job-experience.entity';
import { ProfileEntity } from '../../profile/entities/profile.entity';
import { DisabilityEntity } from '../complements/disability/entities/disability.entity';
import { JobUserEntity } from '../../job/entities/job-user.entity';
import { GenreEntity } from '../complements/genre/entities/genre.entity';

export class UserDTO {
  @IsOptional()
  @IsString()
  photo: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(1000)
  about: string;

  @IsOptional()
  @IsBoolean()
  DBconsent: boolean;

  @IsNotEmpty()
  @IsEnum(JOB_STATE)
  jobState: JOB_STATE;

  @IsOptional()
  languages: LanguageEntity[];

  @IsOptional()
  skills: SkillEntity[];

  @IsOptional()
  educations: EducationEntity[];

  @IsOptional()
  experiencies: JobExperienceEntity[];

  @IsNotEmpty()
  profile: ProfileEntity;

  @IsOptional()
  genre: GenreEntity;

  @IsOptional()
  disability: DisabilityEntity;

  @IsOptional()
  jobUser: JobUserEntity[];
}

export class UserUpdateDTO {
  @IsOptional()
  @IsString()
  photo: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  about: string;

  @IsOptional()
  @IsBoolean()
  DBconsent: boolean;

  @IsOptional()
  @IsEnum(JOB_STATE)
  jobState: JOB_STATE;

  @IsOptional()
  languages: LanguageEntity[];

  @IsOptional()
  skills: SkillEntity[];

  @IsOptional()
  educations: EducationEntity[];

  @IsOptional()
  experiencies: JobExperienceEntity[];

  @IsNotEmpty()
  profile: ProfileEntity;

  @IsOptional()
  genre: GenreEntity;

  @IsOptional()
  disability: DisabilityEntity;

  @IsOptional()
  jobUser: JobUserEntity[];
}
