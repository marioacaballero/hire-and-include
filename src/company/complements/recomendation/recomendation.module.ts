import { Module } from '@nestjs/common';
import { RecomendationController } from './controllers/recomendation.controller';
import { RecomendationService } from './services/recomendation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecomendationEntity } from './entities/recomendation.entity';
import { UserEntity } from '../../../user/entities/user.entity';
import { CompanyEntity } from '../../../company/entities/company.entity';
import { UserService } from '../../../user/services/user.service';
import { CompanyService } from '../../../company/services/company.service';
import { JobUserEntity } from '../../../job/entities/job-user.entity';
import { ProfileService } from '../../../profile/services/profile.service';
import { JobService } from '../../../job/services/job.service';
import { ActivityAreaService } from '../../../job/complements/activity-area/services/activity-area.service';
import { ProfileModule } from '../../../profile/profile.module';
import { JobEntity } from '../../../job/entities/job.entity';
import { SeniorityService } from '../../../job/complements/seniority/services/seniority.service';
import { ChargeService } from '../../../job/complements/charge/services/charge.service';
import { CultureService } from '../../../job/complements/culture/services/culture.service';
import { JobRelationService } from '../../../job/complements/job-relation/services/job-relation.service';
import { ModeService } from '../../../job/complements/mode/services/mode.service';
import { ActivityAreaEntity } from '../../../job/complements/activity-area/entities/activity-areas.entity';
import { SeniorityEntity } from '../../../job/complements/seniority/entities/seniority.entity';
import { ChargeEntity } from '../../../job/complements/charge/entities/charge.entity';
import { CultureEntity } from '../../../job/complements/culture/entities/culture.entity';
import { JobRelationEntity } from '../../../job/complements/job-relation/entities/job-relation.entity';
import { ModeEntity } from '../../../job/complements/mode/entities/mode.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RecomendationEntity,
      UserEntity,
      CompanyEntity,
      JobUserEntity,
      JobEntity,
      ActivityAreaEntity,
      SeniorityEntity,
      ChargeEntity,
      CultureEntity,
      JobRelationEntity,
      ModeEntity,
    ]),
    ProfileModule,
  ],
  controllers: [RecomendationController],
  providers: [
    RecomendationService,
    UserService,
    CompanyService,
    ProfileService,
    JobService,
    ActivityAreaService,
    SeniorityService,
    ChargeService,
    CultureService,
    JobRelationService,
    ModeService,
  ],
})
export class RecomendationModule {}
