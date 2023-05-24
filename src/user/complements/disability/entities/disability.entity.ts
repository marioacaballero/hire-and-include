import { Column, Entity, OneToMany } from 'typeorm';
import { JobEntity } from '../../../../job/entities/job.entity';
import { BaseEntity } from '../../../../config/base.entity';
import { UserEntity } from 'src/user/entities/user.entity';

//Entidad para cargar las discapacidades: Como Motriz, Comunicacion, Vision, etc
@Entity({ name: 'disability' })
export class DisabilityEntity extends BaseEntity {
  @Column()
  name: string; //nombre

  @OneToMany(() => UserEntity, (user) => user.disability)
  user: UserEntity[]; //relacion con el usuario

  @OneToMany(() => JobEntity, (job) => job.disability)
  job: JobEntity[]; //relacion con trabajo
}
