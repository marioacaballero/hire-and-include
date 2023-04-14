import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import {
  JOBTYPECONTRACT,
  JOBTYPECULTURE,
  JOBTYPEINCLUSIVE,
  JOBTYPELOCATION,
  JOBTYPETIME,
} from '../../constants/enums/jobtype';

@Entity({ name: 'jobs' })
export class JobEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  about: string;

  @Column({
    type: 'enum',
    enum: JOBTYPETIME,
  })
  type: JOBTYPETIME;

  @Column({
    type: 'enum',
    enum: JOBTYPELOCATION,
  })
  location: JOBTYPELOCATION;

  @Column()
  salary: string;

  @Column({
    type: 'enum',
    enum: JOBTYPECONTRACT,
  })
  contract: JOBTYPECONTRACT;

  @Column({
    type: 'enum',
    enum: JOBTYPEINCLUSIVE,
  })
  inclusive: JOBTYPEINCLUSIVE;

  @Column({
    type: 'enum',
    enum: JOBTYPECULTURE,
  })
  culture: JOBTYPECULTURE;
}
