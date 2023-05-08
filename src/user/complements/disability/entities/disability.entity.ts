import { BaseEntity } from '../../../../config/base.entity';
import { Column, Entity } from 'typeorm';

//Entidad para cargar las discapacidades: Como Motriz, Comunicacion, Vision, etc
@Entity({ name: 'disability' })
export class DisabilityEntity extends BaseEntity {
  @Column()
  name: string;
}
