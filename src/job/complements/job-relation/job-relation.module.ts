import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobRelationService } from './services/job-relation.service';
import { JobRelationController } from './controllers/job-relation.controller';
import { JobRelationEntity } from './entities/job-relation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobRelationEntity])],
  providers: [JobRelationService],
  controllers: [JobRelationController],
  exports: [JobRelationService, TypeOrmModule],
})
export class JobRelationModule {}
