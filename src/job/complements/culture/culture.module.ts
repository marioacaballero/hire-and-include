import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CultureService } from './services/culture.service';
import { CultureController } from './controllers/culture.controller';
import { CultureEntity } from './entities/culture.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CultureEntity])],
  providers: [CultureService],
  controllers: [CultureController],
})
export class CultureModule {}
