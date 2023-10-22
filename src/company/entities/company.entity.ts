import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { ProfileEntity } from '../../profile/entities/profile.entity';
import { JobEntity } from '../../job/entities/job.entity';
import { RecomendationEntity } from '../complements/recomendation/entities/recomendation.entity';

//Entidad para cargar el perfil de Empresa
@Entity({ name: 'companies' })
export class CompanyEntity extends BaseEntity {
  @Column({ default: '' })
  logo: string; //logo de la empresa

  @Column({ default: false })
  escort: boolean; //para identificar si acompaña a sus empleados

  //Relationships

  @OneToMany(() => JobEntity, (job) => job.company)
  job: JobEntity[]; //relacion con la oferta de trabajo

  @OneToMany(() => ProfileEntity, (profile) => profile.companyRelation)
  userRelation: ProfileEntity[]; //relacion con el usuario para ONG

  @OneToMany(
    () => RecomendationEntity,
    (recomendation) => recomendation.company,
  )
  recomendation: RecomendationEntity[]; //relacion para recomendaciones de usuarios
}
