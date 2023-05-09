import { Module } from '@nestjs/common';
import { SeniorityModule } from './complements/seniority/seniority.module';
import { ActivityAreaModule } from './complements/activity-area/activity-area.module';

@Module({
  imports: [SeniorityModule, ActivityAreaModule],
})
export class JobModule {}
