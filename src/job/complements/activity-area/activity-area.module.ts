import { Module } from '@nestjs/common';
import { ActivityAreaService } from './services/activity-area.service';
import { ActivityAreaController } from './controllers/activity-area.controller';

@Module({
  providers: [ActivityAreaService],
  controllers: [ActivityAreaController],
})
export class ActivityAreaModule {}
