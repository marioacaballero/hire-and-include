import { Column, Entity, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { ActivityAreaEntity } from '../../job/complements/activity-area/entities/activity-areas.entity';
import { ProfileEntity } from '../../profile/entities/profile.entity';
import { JobEntity } from '../../job/entities/job.entity';

//Entidad para cargar el perfil de Empresa
@Entity({ name: 'companies' })
export class CompanyEntity extends BaseEntity {
  @Column()
  name: string; //nombre

  @Column({ default: '' })
  logo: string; //logo de la empresa

  @Column()
  bussinessName: string; //razon social

  @Column()
  IDnumber: string; //CUIL/CUIT

  @Column()
  address: string; //domicilio

  @Column()
  phone: string; //telefono

  @Column({ default: '' })
  web: string; //sitio web

  @Column({ default: '' })
  socialMedia: string; //RRSS

  @Column()
  cityAndCountry: string; //localidad, provincia, pais

  @Column({ default: true })
  isONG: boolean; //para identificar si es ONG

  //Relationships
  @ManyToOne(() => ActivityAreaEntity, (area) => area.company)
  activityArea: ActivityAreaEntity; //area de actividad

  @OneToOne(() => ProfileEntity, (profile) => profile.companyProfile)
  profile: ProfileEntity; //relacion con el perfil de logeo

  @OneToMany(() => JobEntity, (job) => job.company)
  job: JobEntity[]; //relacion con la oferta de trabajo
}
