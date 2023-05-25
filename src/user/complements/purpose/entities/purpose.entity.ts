import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';
import { UserEntity } from '../../../../user/entities/user.entity';

//Entidad para cargar los propositos: Como Desarrollo de carera, Primer Empleo, etc
@Entity({ name: 'purpose' })
export class PurposeEntity extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(() => UserEntity, (user) => user.purpose)
  user: UserEntity[];
}
