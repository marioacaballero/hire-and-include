import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';
import { UserEntity } from '../../../entities/user.entity';
import { SeniorityEntity } from '../../../../job/complements/seniority/entities/seniority.entity';

// Entidad para cargar la experiencia del Postulante
@Entity({ name: 'job-experience' })
export class JobExperienceEntity extends BaseEntity {
  @Column()
  position: string; //cargo

  @Column()
  company: string; //nombre de la empresa

  @Column()
  performance: string; //funcion

  @Column()
  achievement: string; //logros

  @Column()
  start: Date; //desde

  @Column({ default: undefined })
  end: Date; //hasta

  @ManyToOne(() => SeniorityEntity, (seniority) => seniority.jobExperience)
  seniority: SeniorityEntity; //jerarquia

  //usuario al que pertenece
  @ManyToOne(() => UserEntity, (user) => user.experiencies)
  user: UserEntity;
}
