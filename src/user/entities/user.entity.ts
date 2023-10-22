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
import { RecomendationEntity } from '../../company/complements/recomendation/entities/recomendation.entity';
import { UserToUserRecomendationEntity } from '../complements/user-recomendation/entities/user-to-user-recomendation.entity';
import { UserRecomendationEntity } from '../complements/user-recomendation/entities/user-recomendation.entity';

// Entidad para completar el perfil de Postulante / Independiente
@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @Column({ default: '' })
  photo: string; //foto de perfil

  @Column()
  about: string; //perfil*

  @Column({ default: false })
  DBconsent: boolean; //concentimiento para estar en DB

  @Column({ type: 'enum', enum: JOB_STATE })
  jobState: JOB_STATE; //estado de postulante*

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

  @ManyToOne(() => GenreEntity, (genre) => genre.user)
  genre: GenreEntity; //genero

  @ManyToOne(() => DisabilityEntity, (disability) => disability.user)
  disability: DisabilityEntity; //Necesidad de apoyo

  @OneToMany(() => JobUserEntity, (jobUser) => jobUser.user)
  jobUser: JobUserEntity[]; //relacion a la tabla intermedia para muchas ofertas de trabajo

  @OneToOne(() => RecomendationEntity, (recomendation) => recomendation.user)
  companyRecomendation: RecomendationEntity; // relacion para las recomendaciones de la empresa

  @OneToMany(() => UserToUserRecomendationEntity, (recom) => recom.user)
  userToUserRec: UserToUserRecomendationEntity[]; // relacion para las recomendaciones de usuario (table intermedia)

  @OneToMany(() => UserRecomendationEntity, (rec) => rec.user)
  recomendation: UserRecomendationEntity[]; // relacion para las recomendaciones de usuario
}
