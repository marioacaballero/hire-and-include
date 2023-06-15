import { Module } from '@nestjs/common';
import { ChargeService } from './services/charge.service';
import { ChargeController } from './controllers/charge.controller';

@Module({
  providers: [ChargeService],
  controllers: [ChargeController],
})
export class ChargeModule {}
