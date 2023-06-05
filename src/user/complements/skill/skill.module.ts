import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkillService } from './services/skill.service';
import { SkillEntity } from './entities/skill.entity';
import { SkillController } from './controllers/skill.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SkillEntity])],
  providers: [SkillService],
  controllers: [SkillController],
})
export class SkillModule {}
