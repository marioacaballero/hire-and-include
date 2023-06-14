import { Module } from '@nestjs/common';
import { ModeService } from './services/mode.service';

@Module({
  providers: [ModeService]
})
export class ModeModule {}
