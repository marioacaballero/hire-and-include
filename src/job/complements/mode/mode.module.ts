import { Module } from '@nestjs/common';
import { ModeService } from './services/mode.service';
import { ModeController } from './controllers/mode.controller';

@Module({
  providers: [ModeService],
  controllers: [ModeController],
})
export class ModeModule {}
