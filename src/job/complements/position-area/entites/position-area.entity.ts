import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';
import { SubPositionAreaEntity } from '../../sub-position-area/entities/sub-position-area.entity';
import { JobEntity } from '../../../../job/entities/job.entity';
import { JobExperienceEntity } from '../../../../user/complements/job-experience/entities/job-experience.entity';

@Entity({ name: 'position-area' })
export class PositionAreaEntity extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(() => SubPositionAreaEntity, (sub) => sub.positionArea)
  subPositionArea: SubPositionAreaEntity[];

  @OneToMany(() => JobEntity, (job) => job.positionArea)
  job: JobEntity[];

  @OneToMany(
    () => JobExperienceEntity,
    (jobExperience) => jobExperience.positionArea,
  )
  jobExperience: JobExperienceEntity[];
}
