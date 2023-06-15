import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KnowledgeLevelService } from './services/knowledge-level.service';
import { KnowledgeLevelEntity } from './entities/knowledge-level.entity';
import { KnowledgeLevelController } from './controllers/knowledge-level.controller';

@Module({
  imports: [TypeOrmModule.forFeature([KnowledgeLevelEntity])],
  providers: [KnowledgeLevelService],
  controllers: [KnowledgeLevelController],
})
export class KnowledgeLevelModule {}
