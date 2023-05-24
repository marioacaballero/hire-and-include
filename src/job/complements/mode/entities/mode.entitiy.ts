import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';
import { JobEntity } from '../../../../job/entities/job.entity';

//Entidad para cargar la modalidad como: Presencial, Remoto, etc
@Entity({ name: 'job-mode' })
export class JobModeEntity extends BaseEntity {
  @Column()
  name: string; //nombre

  @OneToMany(() => JobEntity, (job) => job.mode)
  job: JobEntity[]; //trabajo
}
