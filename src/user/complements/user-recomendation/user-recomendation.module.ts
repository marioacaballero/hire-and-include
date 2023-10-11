import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRecomendationController } from './controllers/user-recomendation.controller';
import { UserRecomendationService } from './services/user-recomendation.service';
import { UserRecomendationEntity } from './entities/user-recomendation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserRecomendationEntity])],
  controllers: [UserRecomendationController],
  providers: [UserRecomendationService],
})
export class UserRecomendationModule {}
