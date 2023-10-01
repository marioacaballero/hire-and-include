import { Column, Entity, OneToOne } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';
import { UserToUserRecomendationEntity } from './user-to-user-recomendation.entity';

@Entity({ name: 'user-recomendation' })
export class UserRecomendationEntity extends BaseEntity {
  @Column()
  description: string;

  @OneToOne(() => UserToUserRecomendationEntity, (rec) => rec.recomendation)
  user: UserToUserRecomendationEntity;
}
