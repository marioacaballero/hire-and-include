import { Module } from '@nestjs/common';
import { EarUsService } from './services/ear-us.service';
import { EarUsController } from './controllers/ear-us.controller';

@Module({
  providers: [EarUsService],
  controllers: [EarUsController],
})
export class EarUsModule {}
