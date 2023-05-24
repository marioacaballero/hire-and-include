import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';
import { UserEntity } from '../../../entities/user.entity';
import { KnowledgeLevelEntity } from '../../knowledge-level/entities/knowledge-level.entity';

// Entidad para cargar los conocimientos del Postulante
@Entity({ name: 'skills' })
export class SkillEntity extends BaseEntity {
  @Column()
  name: string; //Herramienta / Conocimiento

  @ManyToOne(() => KnowledgeLevelEntity, (level) => level.skill)
  level: KnowledgeLevelEntity; // Nivel de estudio

  // Usuario
  @ManyToMany(() => UserEntity, (user) => user.skills)
  user: UserEntity;
}
