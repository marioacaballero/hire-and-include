import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyService } from './services/company.service';
import { CompanyController } from './controllers/company.controller';
import { CompanyEntity } from './entities/company.entity';
import { ActivityAreaService } from '../job/complements/activity-area/services/activity-area.service';
import { ActivityAreaEntity } from '../job/complements/activity-area/entities/activity-areas.entity';
import { RecomendationModule } from './complements/recomendation/recomendation.module';
import { ProfileCompanyService } from 'src/profile/services/profile-company.service';
import { ProfileCompanyEntity } from 'src/profile/entities/profile-company.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CompanyEntity,
      ProfileCompanyEntity,
      ActivityAreaEntity,
    ]),
    RecomendationModule,
  ],
  providers: [CompanyService, ProfileCompanyService, ActivityAreaService],
  controllers: [CompanyController],
  exports: [CompanyService, TypeOrmModule],
})
export class CompanyModule {}
