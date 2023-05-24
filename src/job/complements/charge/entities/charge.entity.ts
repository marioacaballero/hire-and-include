import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';
import { JobEntity } from '../../../entities/job.entity';

//entidad para registrar la carga horaria: part time, full time, etc
@Entity({ name: 'charge' })
export class ChargeEntity extends BaseEntity {
  @Column()
  name: string; //nombre

  @OneToMany(() => JobEntity, (job) => job.type)
  job: JobEntity[]; //trabajos correspondientes
}
