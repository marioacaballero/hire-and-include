import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KnowledgeLevelService } from './services/knowledge-level.service';
import { KnowledgeLevelEntity } from './entities/knowledge-level.entity';

@Module({
  imports: [TypeOrmModule.forFeature([KnowledgeLevelEntity])],
  providers: [KnowledgeLevelService],
})
export class KnowledgeLevelModule {}
