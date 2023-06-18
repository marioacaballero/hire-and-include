import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { SeniorityEntity } from '../complements/seniority/entities/seniority.entity';
import { ChargeEntity } from '../complements/charge/entities/charge.entity';
import { JobRelationEntity } from '../complements/job-relation/entities/job-relation.entity';
import { ModeEntity } from '../complements/mode/entities/mode.entity';
import { DisabilityEntity } from '../../user/complements/disability/entities/disability.entity';
import { CompanyEntity } from '../../company/entities/company.entity';
import { JobUserEntity } from './job-user.entity';
import { CultureEntity } from '../complements/culture/entities/culture.entity';

//Entidad para cargar las ofertas de trabajo
@Entity({ name: 'jobs' })
export class JobEntity extends BaseEntity {
  @Column()
  name: string; //puesto

  @Column()
  about: string; //objetivo

  @Column()
  salary: string; //rango salarial

  @Column()
  requirements: string; //requisitos

  @Column()
  tasks: string; //tareas

  @Column()
  inclusionProgram: string; //programa de inclusion

  @Column()
  benefits: string; //beneficios

  @Column()
  work_schedule: string; //horario

  @Column()
  city: string; //localidad, estado, pais

  @Column({ default: false })
  minority: boolean; //minoria

  @Column()
  minorityDetail: string; //minoria detalle

  @ManyToOne(() => SeniorityEntity, (seniority) => seniority.job)
  seniority: SeniorityEntity; //jerarquia

  @ManyToOne(() => ChargeEntity, (charge) => charge.job)
  type: ChargeEntity; //carga horaria

  @ManyToOne(() => CultureEntity, (culture) => culture.job)
  culture: CultureEntity; //carga horaria

  @ManyToOne(() => JobRelationEntity, (jobrelation) => jobrelation.job)
  jobRelation: JobRelationEntity; //tipo de contratación

  @ManyToOne(() => ModeEntity, (jobmode) => jobmode.job)
  jobMode: ModeEntity; //modalidad

  @ManyToOne(() => DisabilityEntity, (disability) => disability.job)
  disability: DisabilityEntity; //discapacidad o limitacion

  @ManyToOne(() => CompanyEntity, (company) => company.job)
  company: CompanyEntity; //relacion con la empresa que crea el trabajo

  @OneToMany(() => JobUserEntity, (jobUser) => jobUser.job)
  jobUser: JobUserEntity[]; //relacion a traves de la tabla intermedia para el usuario
}
