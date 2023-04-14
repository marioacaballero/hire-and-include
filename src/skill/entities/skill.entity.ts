import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';

@Entity({ name: 'skills' })
export class SkillEntity extends BaseEntity {
  @Column()
  name: string;
}
