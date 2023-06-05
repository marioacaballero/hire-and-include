import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';
import { JobExperienceEntity } from '../../../../user/complements/job-experience/entities/job-experience.entity';
import { JobEntity } from '../../../../job/entities/job.entity';

// Entidad para cargar la jerarquia: Como Junior, Senior, etc
@Entity({ name: 'seniority' })
export class SeniorityEntity extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(() => JobExperienceEntity, (jobExp) => jobExp.seniority)
  jobExperience: JobExperienceEntity[];

  @OneToMany(() => JobEntity, (job) => job.seniority)
  job: JobEntity[];
}
