import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EarUsService } from './services/ear-us.service';
import { EarUsController } from './controllers/ear-us.controller';
import { EarUsEntity } from './entities/ear-us.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EarUsEntity])],
  providers: [EarUsService],
  controllers: [EarUsController],
  exports: [EarUsService, TypeOrmModule],
})
export class EarUsModule {}
