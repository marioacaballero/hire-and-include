import { Module } from '@nestjs/common';
import { EarUsService } from './services/ear-us.service';

@Module({
  providers: [EarUsService],
})
export class EarUsModule {}
