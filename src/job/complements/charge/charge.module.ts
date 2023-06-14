import { Module } from '@nestjs/common';
import { ChargeService } from './services/charge.service';

@Module({
  providers: [ChargeService]
})
export class ChargeModule {}
