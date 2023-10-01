import { Column, Entity, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { ActivityAreaEntity } from '../../job/complements/activity-area/entities/activity-areas.entity';
import { ProfileEntity } from '../../profile/entities/profile.entity';
import { JobEntity } from '../../job/entities/job.entity';
import { UserEntity } from '../../user/entities/user.entity';
import { RecomendationEntity } from '../complements/recomendation/entities/recomendation.entity';

//Entidad para cargar el perfil de Empresa
@Entity({ name: 'companies' })
export class CompanyEntity extends BaseEntity {
  @Column({ default: 'hire and include' })
  name: string; //nombre

  @Column({ default: '' })
  logo: string; //logo de la empresa

  @Column({ default: 'hire and include' })
  bussinessName: string; //razon social

  @Column({ unique: true })
  IDnumber: string; //CUIL/CUIT

  @Column({ default: 'buenos aires, argentina' })
  address: string; //domicilio

  @Column({ default: '' })
  phone: string; //telefono

  @Column({ default: 'www.hireandinclude.com' })
  web: string; //sitio web

  @Column({ default: '' })
  socialMedia: string; //RRSS

  @Column({ default: 'parana, entre rios, argentina' })
  cityAndCountry: string; //localidad, provincia, pais

  @Column({ default: false })
  isONG: boolean; //para identificar si es ONG

  //Relationships
  @ManyToOne(() => ActivityAreaEntity, (area) => area.company)
  activityArea: ActivityAreaEntity; //area de actividad

  @OneToOne(() => ProfileEntity, (profile) => profile.companyProfile)
  profile: ProfileEntity; //relacion con el perfil de logeo

  @OneToMany(() => JobEntity, (job) => job.company)
  job: JobEntity[]; //relacion con la oferta de trabajo

  @OneToMany(() => UserEntity, (user) => user.companyRelation)
  userRelation: UserEntity[]; //relacion con el usuario para ONG

  @OneToMany(
    () => RecomendationEntity,
    (recomendation) => recomendation.company,
  )
  recomendation: RecomendationEntity[]; //relacion para recomendaciones de usuarios
}
