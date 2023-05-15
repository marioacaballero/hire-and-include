import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { JOB_STATE } from '../../constants/enums/user';
import { LanguageEntity } from '../complements/language/entities/language.entity';
import { SkillEntity } from '../complements/skill/entities/skill.entity';
import { EducationEntity } from '../complements/education/entities/education.entity';
import { JobExperienceEntity } from '../complements/job-experiencie/entities/job-experience.entity';
import { ProfileEntity } from '../../profile/entities/profile.entity';

// Entidad para completar el perfil de Postulante / Independiente
@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @Column()
  firstName: string; //nombre

  @Column()
  lastName: string; //apellido

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

  // Relationships ---->>> REVISAR (APUNTADO EL 09 de MAYO)

  //One user to many entities
  @OneToMany(() => LanguageEntity, (language) => language.user)
  languages: LanguageEntity[]; // Esta es de muchos a muchos

  @OneToMany(() => SkillEntity, (skill) => skill.user)
  skills: SkillEntity[]; // Esta es de muchos a muchos

  @OneToMany(() => EducationEntity, (education) => education.user)
  educations: EducationEntity[];

  @OneToMany(() => JobExperienceEntity, (experience) => experience.user)
  experiencies: JobExperienceEntity[];

  //Many users to one Profile
  @ManyToOne(() => ProfileEntity, (profile) => profile.userProfile)
  profile: ProfileEntity;
}
