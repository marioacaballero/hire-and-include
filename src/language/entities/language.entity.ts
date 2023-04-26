import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { LEVELS } from '../../constants/enums/levels';
import { UserEntity } from '../../user/entities/user.entity';

@Entity({ name: 'language' })
export class LanguageEntity extends BaseEntity {
  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: LEVELS,
  })
  level: LEVELS;

  @ManyToOne(() => UserEntity, (user) => user.languages)
  user: UserEntity;
}
