import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import {
  USER_GENDER,
  USER_GENERATIONS,
  USER_LIMITATION,
  USER_PURPOSES,
} from '../../constants/enums/user';
import { LEVELS } from '../../constants/enums/levels';
import { LanguageEntity } from '../../language/entities/language.entity';
import { SkillEntity } from '../../skill/entities/skill.entity';
import { EducationEntity } from '../../education/entities/education.entity';
import { UserExperienceEntity } from '../../user-experiencie/entities/user-experience.entity';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  birthdate: Date;

  @Column()
  phone: number;

  @Column()
  nationality: string;

  @Column()
  socialMedia: string;

  @Column()
  about: string;

  @Column({ default: true })
  isPublic: boolean;

  @Column({ default: false })
  minority: boolean;

  @Column()
  minorityDetail: string;

  @Column({ type: 'enum', enum: USER_PURPOSES })
  purpose: USER_PURPOSES;

  @Column({ type: 'enum', enum: USER_GENERATIONS })
  generation: USER_GENERATIONS;

  @Column({ type: 'enum', enum: USER_GENDER })
  gender: USER_GENDER;

  @Column({ type: 'enum', enum: USER_LIMITATION })
  limitation: USER_LIMITATION;

  @Column({ type: 'enum', enum: LEVELS })
  limitation_level: LEVELS;

  // Relationships

  //One user to many entities
  @OneToMany(() => LanguageEntity, (language) => language.user)
  languages: LanguageEntity[];

  @OneToMany(() => SkillEntity, (skill) => skill.user)
  skills: SkillEntity[];

  @OneToMany(() => EducationEntity, (education) => education.user)
  educations: EducationEntity[];

  @OneToMany(() => UserExperienceEntity, (experience) => experience.user)
  experiencies: UserExperienceEntity[];
}
