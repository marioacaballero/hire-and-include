import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';
import { UserEntity } from '../../../entities/user.entity';
import { LEVELS } from '../../../../constants/enums/levels';

// Entidad para cargar los idiomas del postulante
@Entity({ name: 'language' })
export class LanguageEntity extends BaseEntity {
  @Column()
  name: string; //Idioma

  @Column({ type: 'enum', enum: LEVELS })
  knowledgeLevel: LEVELS; //Nivel de conocimiento

  // Usuario
  @ManyToMany(() => UserEntity, (user) => user.languages)
  user: UserEntity;
}
