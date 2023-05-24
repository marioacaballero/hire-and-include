import { Module } from '@nestjs/common';
import { SeniorityModule } from './complements/seniority/seniority.module';
import { ActivityAreaModule } from './complements/activity-area/activity-area.module';
import { ChargeModule } from './complements/charge/charge.module';
import { JobRelationModule } from './complements/job-relation/job-relation.module';
import { ModeModule } from './complements/mode/mode.module';
import { CultureModule } from './complements/culture/culture.module';

@Module({
  imports: [
    SeniorityModule,
    ActivityAreaModule,
    ChargeModule,
    JobRelationModule,
    ModeModule,
    CultureModule,
  ],
})
export class JobModule {}
