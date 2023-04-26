import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { LEVELS } from '../../constants/enums/levels';
import { UserEntity } from '../../user/entities/user.entity';

@Entity({ name: 'skills' })
export class SkillEntity extends BaseEntity {
  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: LEVELS,
  })
  level: LEVELS;

  @ManyToMany(() => UserEntity, (user) => user.skills)
  user: UserEntity;
}
