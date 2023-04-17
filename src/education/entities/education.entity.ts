import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import {
  EDUCATIONDEGREE,
  EDUCATIONSTATE,
} from '../../constants/enums/education';

@Entity({ name: 'education' })
export class EducationEntity extends BaseEntity {
  @Column({
    type: 'enum',
    enum: EDUCATIONDEGREE,
  })
  name: EDUCATIONDEGREE;

  @Column({
    type: 'enum',
    enum: EDUCATIONSTATE,
  })
  state: EDUCATIONSTATE;
}
