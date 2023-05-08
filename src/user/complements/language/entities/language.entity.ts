import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';
import { UserEntity } from '../../../entities/user.entity';
import { KnowledgeLevelEntity } from '../../knowledge-level/entities/knowledge-level.entity';

// Entidad para cargar los idiomas del postulante
@Entity({ name: 'language' })
export class LanguageEntity extends BaseEntity {
  @Column()
  name: string; //Idioma

  @ManyToOne(() => KnowledgeLevelEntity, (level) => level.language)
  level: KnowledgeLevelEntity; //Nivel de estudios

  // Usuario
  @ManyToOne(() => UserEntity, (user) => user.languages)
  user: UserEntity;
}
