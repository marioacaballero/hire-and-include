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
import { JobExperienceEntity } from '../complements/job-experience/entities/job-experience.entity';
import { ProfileEntity } from '../../profile/entities/profile.entity';
import { DisabilityEntity } from '../complements/disability/entities/disability.entity';
import { JobUserEntity } from '../../job/entities/job-user.entity';
import { GenreEntity } from '../complements/genre/entities/genre.entity';
import { PurposeEntity } from '../complements/purpose/entities/purpose.entity';
import { CompanyEntity } from '../../company/entities/company.entity';
import { RecomendationEntity } from '../../company/complements/recomendation/entities/recomendation.entity';
import { UserToUserRecomendationEntity } from '../complements/user-recomendation/entities/user-to-user-recomendation.entity';

// Entidad para completar el perfil de Postulante / Independiente
@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @Column({ default: 'hire' })
  firstName: string; //nombre

  @Column({ default: 'include' })
  lastName: string; //apellido

  @Column({ default: '' })
  photo: string; //foto de perfil

  @Column({ default: '20230101' })
  birthdate: Date; //fecha de nacimiento

  @Column({ default: '' })
  phone: string; //telefono

  @Column({ default: '' })
  socialMedia: string; //RRSS

  @Column({ default: 'welcome to hire and include' })
  about: string; //perfil

  @Column({ default: false })
  minority: boolean; //minoria

  @Column({ default: '' })
  minorityDetail: string; //minoria detalle

  @Column({ default: true })
  DBconsent: boolean; //concentimiento para estar en DB

  @Column({ type: 'enum', enum: JOB_STATE, default: JOB_STATE.NO_TENGO })
  jobState: JOB_STATE; //estado de postulante

  @Column({ default: 'parana, entre rios, argentina' })
  cityAndCountry: string; //localidad, provincia, pais

  @Column({ unique: true })
  IDnumber: string; //DNI/CUIL/PASAPORTE

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

  @ManyToOne(() => PurposeEntity, (purpose) => purpose.user)
  purpose: PurposeEntity; //proposito

  @ManyToOne(() => GenreEntity, (genre) => genre.user)
  genre: GenreEntity; //genero

  @ManyToOne(() => DisabilityEntity, (disability) => disability.user)
  disability: DisabilityEntity; //discapacidad

  @OneToMany(() => JobUserEntity, (jobUser) => jobUser.user)
  jobUser: JobUserEntity[]; //relacion a la tabla intermedia para muchas ofertas de trabajo

  @ManyToOne(() => CompanyEntity, (company) => company.userRelation)
  companyRelation: CompanyEntity; // relacion directa para saber si pertenece o no a una empresa

  @OneToOne(() => RecomendationEntity, (recomendation) => recomendation.user)
  companyRecomendation: RecomendationEntity; // relacion para las recomendaciones de la empresa

  @OneToMany(() => UserToUserRecomendationEntity, (recom) => recom.user)
  userToUserRec: UserToUserRecomendationEntity[]; // relacion para las recomendaciones de usuario (table intermedia)
}
