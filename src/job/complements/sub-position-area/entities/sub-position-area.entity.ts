import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../../config/base.entity';
import { PositionAreaEntity } from '../../position-area/entites/position-area.entity';

@Entity({ name: 'sub-position-area' })
export class SubPositionAreaEntity extends BaseEntity {
  @Column()
  name: string;

  @ManyToOne(() => PositionAreaEntity, (position) => position.subPositionArea)
  positionArea: PositionAreaEntity;
}
