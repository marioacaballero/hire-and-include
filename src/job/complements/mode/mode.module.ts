import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModeService } from './services/mode.service';
import { ModeController } from './controllers/mode.controller';
import { ModeEntity } from './entities/mode.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ModeEntity])],
  providers: [ModeService],
  controllers: [ModeController],
})
export class ModeModule {}
