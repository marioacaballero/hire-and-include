import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './services/user.service';
import { UserEntity } from './entities/user.entity';
import { UserController } from './controllers/user.controller';
import { ProfileService } from '../profile/services/profile.service';
import { ProfileEntity } from '../profile/entities/profile.entity';
import { JobUserEntity } from '../job/entities/job-user.entity';
import { JobService } from '../job/services/job.service';
import { JobEntity } from '../job/entities/job.entity';
import { CompanyService } from '../company/services/company.service';
import { SeniorityModule } from '../job/complements/seniority/seniority.module';
import { ChargeModule } from '../job/complements/charge/charge.module';
import { CultureModule } from '../job/complements/culture/culture.module';
import { JobRelationModule } from '../job/complements/job-relation/job-relation.module';
import { ModeModule } from '../job/complements/mode/mode.module';
import { CompanyEntity } from '../company/entities/company.entity';
import { ActivityAreaModule } from '../job/complements/activity-area/activity-area.module';
import { UserRecomendationModule } from './complements/user-recomendation/user-recomendation.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      ProfileEntity,
      JobUserEntity,
      JobEntity,
      CompanyEntity,
    ]),
    SeniorityModule,
    ChargeModule,
    JobRelationModule,
    CultureModule,
    ModeModule,
    ActivityAreaModule,
    UserRecomendationModule,
  ],
  controllers: [UserController],
  providers: [UserService, ProfileService, JobService, CompanyService],
})
export class UserModule {}
