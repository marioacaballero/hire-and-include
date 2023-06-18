import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';
import { JobEntity } from '../../../entities/job.entity';

//Entidad para cargar la modalidad como: Presencial, Remoto, etc
@Entity({ name: 'jobmode' })
export class ModeEntity extends BaseEntity {
  @Column()
  name: string; //nombre

  @OneToMany(() => JobEntity, (job) => job.jobMode)
  job: JobEntity[]; //trabajo
}
