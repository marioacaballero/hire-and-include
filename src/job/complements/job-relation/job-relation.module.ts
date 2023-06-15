import { Module } from '@nestjs/common';
import { JobRelationService } from './services/job-relation.service';
import { JobRelationController } from './controllers/job-relation.controller';

@Module({
  providers: [JobRelationService],
  controllers: [JobRelationController],
})
export class JobRelationModule {}
