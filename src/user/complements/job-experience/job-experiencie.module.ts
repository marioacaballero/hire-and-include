import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobExperienceService } from './services/job-experience.service';
import { JobExperienceEntity } from './entities/job-experience.entity';
import { JobExperienceController } from './controllers/job-experience.controller';

@Module({
  imports: [TypeOrmModule.forFeature([JobExperienceEntity])],
  providers: [JobExperienceService],
  controllers: [JobExperienceController],
})
export class JobExperiencieModule {}
