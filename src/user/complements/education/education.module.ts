import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EducationService } from './services/education.service';
import { EducationLevelService } from './services/education-level.service';
import { EducationEntity } from './entities/education.entity';
import { EducationLevelEntity } from './entities/education-level.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EducationEntity, EducationLevelEntity])],
  providers: [EducationService, EducationLevelService],
})
export class EducationModule {}
