import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';
import { JobExperienceEntity } from '../../../../user/complements/job-experiencie/entities/job-experience.entity';

// Entidad para cargar la jerarquia: Como Junior, Senior, etc
@Entity({ name: 'seniority' })
export class SeniorityEntity extends BaseEntity {
  @Column()
  name: string;

  // hay que ver la relacion con la oferta de trabajo tambien
  @OneToMany(() => JobExperienceEntity, (jobExp) => jobExp.seniority)
  jobExperience: JobExperienceEntity[];
}
