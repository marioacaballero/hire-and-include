import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { JOB_STATE } from '../../constants/enums/user';
import { LanguageEntity } from '../complements/language/entities/language.entity';
import { SkillEntity } from '../complements/skill/entities/skill.entity';
import { EducationEntity } from '../complements/education/entities/education.entity';
import { JobExperienceEntity } from '../complements/job-experiencie/entities/job-experience.entity';
import { ProfileEntity } from '../../profile/entities/profile.entity';
import { DisabilityEntity } from '../complements/disability/entities/disability.entity';
import { JobUserEntity } from '../../job/entities/job-user.entity';
import { GenreEntity } from '../complements/genre/entities/genre.entity';
import { PurposeEntity } from '../complements/purpose/entities/purpose.entity';

export class UserDTO {
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  lastName: string;

  @IsOptional()
  @IsString()
  photo: string;

  @IsNotEmpty()
  @IsDate()
  @MaxLength(10)
  birthdate: Date;

  @IsNotEmpty()
  @IsNumber()
  @MaxLength(20)
  phone: number;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  socialMedia: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(1000)
  about: string;

  @IsNotEmpty()
  @IsBoolean()
  minority: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(60)
  minorityDetail: string;

  @IsNotEmpty()
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
  @IsNumber()
  @MaxLength(11)
  IDnumber: number;

  @IsOptional()
  languages: LanguageEntity[];

  @IsOptional()
  skills: SkillEntity[];

  @IsOptional()
  educations: EducationEntity[];

  @IsOptional()
  experiencies: JobExperienceEntity[];

  @IsOptional()
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
  @MaxLength(20)
  firstName: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  lastName: string;

  @IsOptional()
  @IsString()
  photo: string;

  @IsOptional()
  @IsDate()
  @MaxLength(10)
  birthdate: Date;

  @IsOptional()
  @IsNumber()
  @MaxLength(20)
  phone: number;

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
  minority: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(60)
  minorityDetail: string;

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
  @IsNumber()
  @MaxLength(11)
  IDnumber: number;

  @IsOptional()
  languages: LanguageEntity[];

  @IsOptional()
  skills: SkillEntity[];

  @IsOptional()
  educations: EducationEntity[];

  @IsOptional()
  experiencies: JobExperienceEntity[];

  @IsOptional()
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
