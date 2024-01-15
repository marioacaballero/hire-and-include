import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { ProfileService } from '../profile/services/profile.service';
import { ProfileModule } from '../profile/profile.module';
import { ProfileCompanyService } from '../profile/services/profile-company.service';
import { EarUsService } from '../profile/complements/ear-us/services/ear-us.service';
import { EarUsModule } from '../profile/complements/ear-us/ear-us.module';
import { ActivityAreaService } from '../job/complements/activity-area/services/activity-area.service';
import { ActivityAreaModule } from '../job/complements/activity-area/activity-area.module';

@Module({
  imports: [ProfileModule, EarUsModule, ActivityAreaModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    ProfileService,
    ProfileCompanyService,
    EarUsService,
    ActivityAreaService,
  ],
})
export class AuthModule {}
