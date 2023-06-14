import { Module } from '@nestjs/common';
import { JobRelationService } from './services/job-relation.service';

@Module({
  providers: [JobRelationService]
})
export class JobRelationModule {}
