import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobExperienceService } from './services/job-experience.service';
import { JobExperienceEntity } from './entities/job-experience.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobExperienceEntity])],
  providers: [JobExperienceService],
})
export class JobExperiencieModule {}
