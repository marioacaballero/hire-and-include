import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyService } from './services/company.service';
import { CompanyController } from './controllers/company.controller';
import { CompanyEntity } from './entities/company.entity';
import { ProfileService } from '../profile/services/profile.service';
import { ProfileEntity } from '../profile/entities/profile.entity';
import { ActivityAreaService } from '../job/complements/activity-area/services/activity-area.service';
import { ActivityAreaEntity } from '../job/complements/activity-area/entities/activity-areas.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CompanyEntity,
      ProfileEntity,
      ActivityAreaEntity,
    ]),
  ],
  providers: [CompanyService, ProfileService, ActivityAreaService],
  controllers: [CompanyController],
  exports: [CompanyService, TypeOrmModule],
})
export class CompanyModule {}
