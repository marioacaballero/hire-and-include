import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';
import { JobEntity } from '../../../../job/entities/job.entity';

//Entidad para cargar el tipo de contratación como: Indeterminado, eventual, etc
@Entity({ name: 'job-relation' })
export class JobRelationEntity extends BaseEntity {
  @Column()
  name: string; //nombre

  @OneToMany(() => JobEntity, (job) => job.jobRelation)
  job: JobEntity[]; //trabajo
}
