import { Module } from '@nestjs/common';
import { SeniorityModule } from './complements/seniority/seniority.module';

@Module({
  imports: [SeniorityModule],
})
export class JobModule {}
