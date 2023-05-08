import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';

//Entidad para cargar los propositos: Como Desarrollo de carera, Primer Empleo, etc
@Entity({ name: 'purpose' })
export class PurposeEntity extends BaseEntity {
  @Column()
  name: string;
}
