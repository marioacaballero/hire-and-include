import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { JOB_STATE } from '../../constants/enums/user';
import { LanguageEntity } from '../complements/language/entities/language.entity';
import { SkillEntity } from '../complements/skill/entities/skill.entity';
import { EducationEntity } from '../complements/education/entities/education.entity';
import { JobExperienceEntity } from '../complements/job-experiencie/entities/job-experience.entity';
import { ProfileEntity } from '../../profile/entities/profile.entity';
import { DisabilityEntity } from '../complements/disability/entities/disability.entity';
import { JobUserEntity } from '../../job/entities/job-user.entity';

// Entidad para completar el perfil de Postulante / Independiente
@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @Column()
  firstName: string; //nombre

  @Column()
  lastName: string; //apellido

  @Column()
  photo: string; //foto de perfil

  @Column()
  birthdate: Date; //fecha de nacimiento

  @Column()
  phone: number; //telefono

  @Column()
  socialMedia: string; //RRSS

  @Column()
  about: string; //perfil

  @Column({ default: false })
  minority: boolean; //minoria

  @Column()
  minorityDetail: string; //minoria detalle

  @Column({ default: true })
  DBconsent: boolean; //concentimiento para estar en DB

  @Column({ type: 'enum', enum: JOB_STATE, default: JOB_STATE.NO_TENGO })
  jobState: JOB_STATE; //estado de postulante

  @Column()
  cityAndCountry: string; //localidad, provincia, pais

  @Column()
  IDnumber: number; //DNI/CUIL/PASAPORTE

  // Relationships
  @ManyToMany(() => LanguageEntity, (language) => language.user)
  @JoinTable()
  languages: LanguageEntity[]; // idiomas

  @ManyToMany(() => SkillEntity, (skill) => skill.user)
  @JoinTable()
  skills: SkillEntity[]; // habilidades - conocimientos

  @OneToMany(() => EducationEntity, (education) => education.user)
  educations: EducationEntity[]; //formacion - educacion

  @OneToMany(() => JobExperienceEntity, (experience) => experience.user)
  experiencies: JobExperienceEntity[]; //experiencias

  @OneToOne(() => ProfileEntity, (profile) => profile.userProfile)
  profile: ProfileEntity; //relacion con el perfil de logeo

  @ManyToOne(() => DisabilityEntity, (disability) => disability.user)
  disability: DisabilityEntity; //discapacidad

  @OneToMany(() => JobUserEntity, (jobUser) => jobUser.user)
  jobUser: JobUserEntity[]; //relacion a la tabla intermedia para muchas ofertas de trabajo
}
