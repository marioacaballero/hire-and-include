import { Module } from '@nestjs/common';
import { RecomendationController } from './controllers/recomendation.controller';
import { RecomendationService } from './services/recomendation.service';

@Module({
  controllers: [RecomendationController],
  providers: [RecomendationService],
})
export class RecomendationModule {}
