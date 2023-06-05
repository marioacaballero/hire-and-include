import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DisabilityService } from './services/disability.service';
import { DisabilityEntity } from './entities/disability.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DisabilityEntity])],
  providers: [DisabilityService],
})
export class DisabilityModule {}
