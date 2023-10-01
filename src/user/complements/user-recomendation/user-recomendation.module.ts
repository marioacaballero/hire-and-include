import { Module } from '@nestjs/common';
import { UserRecomendationController } from './controllers/user-recomendation.controller';
import { UserRecomendationService } from './services/user-recomendation.service';

@Module({
  controllers: [UserRecomendationController],
  providers: [UserRecomendationService],
})
export class UserRecomendationModule {}
