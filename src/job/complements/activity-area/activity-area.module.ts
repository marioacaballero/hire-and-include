import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityAreaService } from './services/activity-area.service';
import { ActivityAreaController } from './controllers/activity-area.controller';
import { ActivityAreaEntity } from './entities/activity-areas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ActivityAreaEntity])],
  providers: [ActivityAreaService],
  controllers: [ActivityAreaController],
  exports: [ActivityAreaService, TypeOrmModule],
})
export class ActivityAreaModule {}
