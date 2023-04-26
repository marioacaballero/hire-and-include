import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import {
  EDUCATIONDEGREE,
  EDUCATIONSTATE,
} from '../../constants/enums/education';
import { UserEntity } from '../../user/entities/user.entity';

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
    enum: EDUCATIONDEGREE,
  })
  education_degree: EDUCATIONDEGREE;

  @Column({
    type: 'enum',
    enum: EDUCATIONSTATE,
  })
  state: EDUCATIONSTATE;

  @ManyToOne(() => UserEntity, (user) => user.educations)
  user: UserEntity;
}
