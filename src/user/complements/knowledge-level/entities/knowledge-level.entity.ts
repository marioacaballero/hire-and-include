import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';
import { LanguageEntity } from '../../language/entities/language.entity';
import { SkillEntity } from '../../skill/entities/skill.entity';

//Entidad para cargar los niveles de conocimiento: Como Basico, Intermedio, Avanzado, etc
@Entity({ name: 'knowledge-level' })
export class KnowledgeLevelEntity extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(() => LanguageEntity, (language) => language.level)
  language: LanguageEntity[];

  @OneToMany(() => SkillEntity, (skill) => skill.level)
  skill: SkillEntity[];
}
