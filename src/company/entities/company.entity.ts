import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';

@Entity({ name: 'companies' })
export class CompanyEntity extends BaseEntity {
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  bussinessName: string;

  @Column()
  address: string;

  @Column()
  phone: number;

  @Column()
  web: string;

  @Column()
  socialMedia: string;
}
