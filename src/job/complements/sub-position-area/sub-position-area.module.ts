import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubPositionAreaController } from './controllers/sub-position-area.controller';
import { SubPositionAreaService } from './services/sub-position-area.service';
import { SubPositionAreaEntity } from './entities/sub-position-area.entity';
import { PositionAreaService } from '../position-area/services/position-area.service';
import { PositionAreaEntity } from '../position-area/entites/position-area.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SubPositionAreaEntity, PositionAreaEntity]),
  ],
  controllers: [SubPositionAreaController],
  providers: [SubPositionAreaService, PositionAreaService],
})
export class SubPositionAreaModule {}
