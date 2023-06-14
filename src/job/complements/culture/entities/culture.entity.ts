import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';
import { JobEntity } from '../../../../job/entities/job.entity';

//Entidad para cargar la cultura de la oferta de trabajo: dinamica, flexible, etc
@Entity({ name: 'culture' })
export class CultureEntity extends BaseEntity {
  @Column()
  name: string; //nombre

  @OneToMany(() => JobEntity, (job) => job.culture)
  job: JobEntity[]; //trabajos correspondientes
}
