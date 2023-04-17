import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { LEVELS } from '../../constants/enums/levels';

@Entity({ name: 'skills' })
export class SkillEntity extends BaseEntity {
  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: LEVELS,
  })
  level: LEVELS;
}
