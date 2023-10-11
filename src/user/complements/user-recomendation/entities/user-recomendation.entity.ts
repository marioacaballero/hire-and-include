import { Column, Entity, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';
import { UserToUserRecomendationEntity } from './user-to-user-recomendation.entity';
import { UserEntity } from '../../../../user/entities/user.entity';

@Entity({ name: 'user-recomendation' })
export class UserRecomendationEntity extends BaseEntity {
  @Column()
  description: string;

  @OneToOne(() => UserToUserRecomendationEntity, (rec) => rec.recomendation)
  userToUser: UserToUserRecomendationEntity;

  @ManyToOne(() => UserEntity, (user) => user.recomendation)
  user: UserEntity;
}
