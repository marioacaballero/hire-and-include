import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';
import { EducationEntity } from './education.entity';

//Entidad para cargar los niveles de educacion: Universitario, Terciario, etc
@Entity({ name: 'education-level' })
export class EducationLevelEntity extends BaseEntity {
  @Column()
  name: string;

  @ManyToOne(() => EducationEntity, (education) => education.educationDegree)
  education: EducationEntity[];
}
