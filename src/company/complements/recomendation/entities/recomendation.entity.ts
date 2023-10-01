import { Column, Entity, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';
import { CompanyEntity } from '../../../../company/entities/company.entity';
import { UserEntity } from '../../../../user/entities/user.entity';

@Entity({ name: 'recomendations' })
export class RecomendationEntity extends BaseEntity {
  @Column({ default: '' })
  description: string;

  @ManyToOne(() => CompanyEntity, (company) => company.recomendation)
  company: CompanyEntity;

  @OneToOne(() => UserEntity, (user) => user.companyRecomendation)
  user: UserEntity;
}
