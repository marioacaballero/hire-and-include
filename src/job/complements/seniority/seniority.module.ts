import { Module } from '@nestjs/common';
import { SeniorityService } from './services/seniority.service';

@Module({
  providers: [SeniorityService]
})
export class SeniorityModule {}
