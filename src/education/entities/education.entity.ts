import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { EDUCATIONSTATE } from '../../constants/enums/education';

@Entity({ name: 'education' })
export class EducationEntity extends BaseEntity {
  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: EDUCATIONSTATE,
  })
  state: EDUCATIONSTATE;
}
