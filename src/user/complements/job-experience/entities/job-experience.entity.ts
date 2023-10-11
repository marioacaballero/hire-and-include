import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';
import { UserEntity } from '../../../entities/user.entity';
import { SeniorityEntity } from '../../../../job/complements/seniority/entities/seniority.entity';
import { PositionAreaEntity } from '../../../../job/complements/position-area/entites/position-area.entity';
import { SubPositionAreaEntity } from '../../../../job/complements/sub-position-area/entities/sub-position-area.entity';

// Entidad para cargar la experiencia del Postulante
@Entity({ name: 'job-experience' })
export class JobExperienceEntity extends BaseEntity {
  @Column()
  position: string; //cargo*

  @Column()
  company: string; //nombre de la empresa*

  @Column()
  performance: string; //funcion

  @Column()
  achievement: string; //logros

  @Column()
  start: Date; //desde*

  @Column({ default: undefined })
  end: Date; //hasta*

  @ManyToOne(() => SeniorityEntity, (seniority) => seniority.jobExperience)
  seniority: SeniorityEntity; //jerarquia*

  //usuario al que pertenece
  @ManyToOne(() => UserEntity, (user) => user.experiencies)
  user: UserEntity;

  @ManyToOne(
    () => PositionAreaEntity,
    (positionArea) => positionArea.jobExperience,
  )
  positionArea: PositionAreaEntity; //area de puesto*

  @ManyToOne(
    () => SubPositionAreaEntity,
    (subPosition) => subPosition.jobExperience,
  )
  subPositionArea: SubPositionAreaEntity; //subarea de puesto*
}
