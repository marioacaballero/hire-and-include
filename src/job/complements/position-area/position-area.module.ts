import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PositionAreaService } from './services/position-area.service';
import { PositionAreaController } from './controllers/position-area.controller';
import { PositionAreaEntity } from './entites/position-area.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PositionAreaEntity])],
  providers: [PositionAreaService],
  controllers: [PositionAreaController],
  exports: [PositionAreaService, TypeOrmModule],
})
export class PositionAreaModule {}
