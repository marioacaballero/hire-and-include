import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChargeService } from './services/charge.service';
import { ChargeController } from './controllers/charge.controller';
import { ChargeEntity } from './entities/charge.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChargeEntity])],
  providers: [ChargeService],
  controllers: [ChargeController],
  exports: [ChargeService, TypeOrmModule],
})
export class ChargeModule {}
