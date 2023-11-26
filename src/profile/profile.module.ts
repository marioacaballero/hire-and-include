import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileEntity } from './entities/profile.entity';
import { ProfileController } from './controllers/profile.controller';
import { ProfileService } from './services/profile.service';
import { EarUsModule } from './complements/ear-us/ear-us.module';
import { ProfileCompanyService } from './services/profile-company.service';
import { ProfileCompanyController } from './controllers/profile-company.controller';
import { ProfileCompanyEntity } from './entities/profile-company.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProfileEntity, ProfileCompanyEntity]),
    EarUsModule,
  ],
  controllers: [ProfileController, ProfileCompanyController],
  providers: [ProfileService, ProfileCompanyService],
  exports: [ProfileService, ProfileCompanyService, TypeOrmModule],
})
export class ProfileModule {}
