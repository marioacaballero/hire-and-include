import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileEntity } from './entities/profile.entity';
import { ProfileController } from './controllers/profile.controller';
import { ProfileService } from './services/profile.service';
import { EarUsModule } from './complements/ear-us/ear-us.module';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileEntity]), EarUsModule],
  controllers: [ProfileController],
  providers: [ProfileService],
  exports: [ProfileService, TypeOrmModule],
})
export class ProfileModule {}
