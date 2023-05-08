import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';
import { EDUCATIONSTATE } from '../../../../constants/enums/education';
import { UserEntity } from '../../../entities/user.entity';
import { EducationLevelEntity } from './education-level.entity';

//Entidad para cargar la formacion del postulante
@Entity({ name: 'education' })
export class EducationEntity extends BaseEntity {
  @Column()
  institution: string;

  @Column()
  diploma: string;

  @Column({ default: undefined })
  graduation_year: number;

  @Column({
    type: 'enum',
    enum: EDUCATIONSTATE,
  })
  state: EDUCATIONSTATE;

  @ManyToOne(() => EducationLevelEntity, (educLevel) => educLevel.education)
  educationDegree: EducationLevelEntity;

  @ManyToOne(() => UserEntity, (user) => user.educations)
  user: UserEntity;
}
