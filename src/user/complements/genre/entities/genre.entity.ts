import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';
import { UserEntity } from '../../../../user/entities/user.entity';

// Entidad para cargar los generos: Femenino, Masculino, No Binario, etc
@Entity({ name: 'genres' })
export class GenreEntity extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(() => UserEntity, (user) => user.genre)
  user: UserEntity[];
}
