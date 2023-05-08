import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import {
  USER_GENDER,
  USER_GENERATIONS,
  USER_LIMITATION,
  USER_PURPOSES,
} from '../../constants/enums/user';
import { LEVELS } from '../../constants/enums/levels';
import { LanguageEntity } from '../complements/language/entities/language.entity';
import { SkillEntity } from '../complements/skill/entities/skill.entity';
import { EducationEntity } from '../complements/education/entities/education.entity';
import { JobExperienceEntity } from '../complements/job-experiencie/entities/job-experience.entity';

// Entidad para completar el perfil de Postulante / Independiente

// Revisar y/o cambiar los enums que no van y pasarlos a relaciones
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
  languages: LanguageEntity[]; // Esta es de muchos a muchos

  @OneToMany(() => SkillEntity, (skill) => skill.user)
  skills: SkillEntity[]; // Esta es de muchos a muchos

  @OneToMany(() => EducationEntity, (education) => education.user)
  educations: EducationEntity[];

  @OneToMany(() => JobExperienceEntity, (experience) => experience.user)
  experiencies: JobExperienceEntity[];
}
