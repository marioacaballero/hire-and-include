import { Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { UserEntity } from '../../user/entities/user.entity';
import { JobEntity } from './job.entity';

//Tabla intermedia para la relacion de muchos a muchos entre oferta de trabajo y usuario postulante
@Entity({ name: 'job-user' })
export class JobUserEntity extends BaseEntity {
  @ManyToOne(() => UserEntity, (user) => user.jobUser)
  user: UserEntity; //

  @ManyToOne(() => JobEntity, (job) => job.jobUser)
  job: JobEntity;
}
