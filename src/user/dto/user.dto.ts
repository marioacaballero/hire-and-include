import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
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
import { PurposeEntity } from '../complements/purpose/entities/purpose.entity';

export class UserDTO {
  @IsOptional()
  @IsString()
  photo: string;

  @IsNotEmpty()
  @IsDate()
  birthdate: Date;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  phone: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  socialMedia: string;

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

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  cityAndCountry: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(11)
  IDnumber: string;

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
  urpose: PurposeEntity;

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
  @IsDate()
  birthdate: Date;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  phone: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  socialMedia: string;

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
  @IsString()
  @MaxLength(100)
  cityAndCountry: string;

  @IsOptional()
  @IsString()
  @MinLength(8)
  @MaxLength(11)
  IDnumber: string;

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
  urpose: PurposeEntity;

  @IsOptional()
  genre: GenreEntity;

  @IsOptional()
  disability: DisabilityEntity;

  @IsOptional()
  jobUser: JobUserEntity[];
}
