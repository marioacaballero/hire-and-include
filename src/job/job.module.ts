import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { SeniorityModule } from './complements/seniority/seniority.module';
// import { ActivityAreaModule } from './complements/activity-area/activity-area.module';
// import { ChargeModule } from './complements/charge/charge.module';
// import { JobRelationModule } from './complements/job-relation/job-relation.module';
// import { ModeModule } from './complements/mode/mode.module';
// import { CultureModule } from './complements/culture/culture.module';
import { JobService } from './services/job.service';
import { JobController } from './controllers/job.controller';
import { JobEntity } from './entities/job.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([JobEntity]),
    // SeniorityModule,
    // ActivityAreaModule,
    // ChargeModule,
    // JobRelationModule,
    // ModeModule,
    // CultureModule,
  ],
  providers: [JobService],
  controllers: [JobController],
})
export class JobModule {}
