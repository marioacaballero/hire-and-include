import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyService } from './services/company.service';
import { CompanyController } from './controllers/company.controller';
import { CompanyEntity } from './entities/company.entity';
import { ProfileService } from '../profile/services/profile.service';
import { ProfileEntity } from '../profile/entities/profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyEntity, ProfileEntity])],
  providers: [CompanyService, ProfileService],
  controllers: [CompanyController],
})
export class CompanyModule {}
