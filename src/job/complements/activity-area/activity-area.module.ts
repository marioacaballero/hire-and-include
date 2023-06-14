import { Module } from '@nestjs/common';
import { ActivityAreaService } from './services/activity-area.service';

@Module({
  providers: [ActivityAreaService]
})
export class ActivityAreaModule {}
