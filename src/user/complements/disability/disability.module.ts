import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DisabilityService } from './services/disability.service';
import { DisabilityEntity } from './entities/disability.entity';
import { DisabilityController } from './controllers/disability.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DisabilityEntity])],
  providers: [DisabilityService],
  controllers: [DisabilityController],
})
export class DisabilityModule {}
