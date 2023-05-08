import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';

// Entidad para cargar los generos: Femenino, Masculino, No Binario, etc
@Entity({ name: 'genres' })
export class GenreEntity extends BaseEntity {
  @Column()
  name: string;
}
