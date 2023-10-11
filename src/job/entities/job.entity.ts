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
import { PositionAreaEntity } from '../complements/position-area/entites/position-area.entity';
import { SubPositionAreaEntity } from '../complements/sub-position-area/entities/sub-position-area.entity';

//Entidad para cargar las ofertas de trabajo
@Entity({ name: 'jobs' })
export class JobEntity extends BaseEntity {
  @Column()
  name: string; //puesto

  @Column('longtext')
  about: string; //objetivo

  @Column()
  salary: string; //rango salarial

  @Column('longtext')
  requirements: string; //requisitos

  @Column('longtext')
  tasks: string; //tareas

  @Column('longtext')
  inclusionProgram: string; //programa de inclusion

  @Column('longtext')
  benefits: string; //beneficios

  @Column()
  work_schedule: string; //horario

  @Column()
  city: string; //localidad, estado, pais

  @Column()
  quantity: number; //cantidad de vacantes

  @ManyToOne(() => SeniorityEntity, (seniority) => seniority.job)
  seniority: SeniorityEntity; //jerarquia

  @ManyToOne(() => ChargeEntity, (charge) => charge.job)
  type: ChargeEntity; //carga horaria

  @ManyToOne(() => CultureEntity, (culture) => culture.job)
  culture: CultureEntity; //cultura de trabajo

  @ManyToOne(() => PositionAreaEntity, (positionArea) => positionArea.job)
  positionArea: PositionAreaEntity; //area de puesto

  @ManyToOne(() => SubPositionAreaEntity, (subPosition) => subPosition.job)
  subPositionArea: SubPositionAreaEntity; //subarea de puesto

  @ManyToOne(() => JobRelationEntity, (jobrelation) => jobrelation.job)
  jobRelation: JobRelationEntity; //tipo de contratación

  @ManyToOne(() => ModeEntity, (jobmode) => jobmode.job)
  jobMode: ModeEntity; //modalidad

  @ManyToOne(() => DisabilityEntity, (disability) => disability.job)
  disability: DisabilityEntity; //necesidad de apoyo

  @ManyToOne(() => CompanyEntity, (company) => company.job)
  company: CompanyEntity; //relacion con la empresa que crea el trabajo

  @OneToMany(() => JobUserEntity, (jobUser) => jobUser.job)
  jobUser: JobUserEntity[]; //relacion a traves de la tabla intermedia para el usuario
}
