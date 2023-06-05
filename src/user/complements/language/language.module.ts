import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageService } from './services/language.service';
import { LanguageEntity } from './entities/language.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LanguageEntity])],
  providers: [LanguageService],
})
export class LanguageModule {}
