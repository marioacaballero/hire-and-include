import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { JOBTYPESENIORITY } from '../../constants/enums/jobtype';
import { UserEntity } from '../../user/entities/user.entity';

@Entity({ name: 'user-experience' })
export class UserExperienceEntity extends BaseEntity {
  @Column()
  position: string;

  @Column()
  company: string;

  @Column()
  performance: string;

  @Column()
  achievement: string;

  @Column()
  start: Date;

  @Column({ default: undefined })
  end: Date;

  @Column({ type: 'enum', enum: JOBTYPESENIORITY })
  seniority: JOBTYPESENIORITY;

  @ManyToOne(() => UserEntity, (user) => user.experiencies)
  user: UserEntity;
}
