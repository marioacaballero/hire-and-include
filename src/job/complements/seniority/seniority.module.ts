import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeniorityService } from './services/seniority.service';
import { SeniorityController } from './controllers/seniority.controller';
import { SeniorityEntity } from './entities/seniority.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SeniorityEntity])],
  providers: [SeniorityService],
  controllers: [SeniorityController],
  exports: [SeniorityService, TypeOrmModule],
})
export class SeniorityModule {}
