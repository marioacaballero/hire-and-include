import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';
import { PositionAreaEntity } from '../../position-area/entites/position-area.entity';
import { JobEntity } from '../../../../job/entities/job.entity';
import { JobExperienceEntity } from '../../../../user/complements/job-experience/entities/job-experience.entity';

@Entity({ name: 'sub-position-area' })
export class SubPositionAreaEntity extends BaseEntity {
  @Column()
  name: string;

  @ManyToOne(() => PositionAreaEntity, (position) => position.subPositionArea)
  positionArea: PositionAreaEntity;

  @ManyToOne(() => JobEntity, (job) => job.subPositionArea)
  job: JobEntity[];

  @ManyToOne(
    () => JobExperienceEntity,
    (jobExperience) => jobExperience.subPositionArea,
  )
  jobExperience: JobExperienceEntity[];
}
