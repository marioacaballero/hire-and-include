import { Module } from '@nestjs/common';
import { SeniorityService } from './services/seniority.service';
import { SeniorityController } from './controllers/seniority.controller';

@Module({
  providers: [SeniorityService],
  controllers: [SeniorityController],
})
export class SeniorityModule {}
