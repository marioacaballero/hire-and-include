import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  birthdate: Date;

  @Column()
  phone: number;

  @Column()
  nationality: string;

  @Column()
  socialMedia: string;

  @Column()
  profile: string;

  @Column()
  minority: string;
}
