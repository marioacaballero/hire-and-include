import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageService } from './services/language.service';
import { LanguageEntity } from './entities/language.entity';
import { LanguageController } from './controllers/language.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LanguageEntity])],
  providers: [LanguageService],
  controllers: [LanguageController],
})
export class LanguageModule {}
