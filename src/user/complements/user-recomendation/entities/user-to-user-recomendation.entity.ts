import { Entity, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';
import { UserEntity } from '../../../../user/entities/user.entity';
import { UserRecomendationEntity } from './user-recomendation.entity';

@Entity({ name: 'user-to-user-recomendation' })
export class UserToUserRecomendationEntity extends BaseEntity {
  @ManyToOne(() => UserEntity, (user) => user.userToUserRec)
  user: UserEntity;

  @OneToOne(() => UserRecomendationEntity, (rec) => rec.userToUser)
  recomendation: UserRecomendationEntity;
}
