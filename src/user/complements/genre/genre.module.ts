import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenreService } from './services/genre.service';
import { GenreEntity } from './entities/genre.entity';
import { GenreController } from './controllers/genre.controller';

@Module({
  imports: [TypeOrmModule.forFeature([GenreEntity])],
  providers: [GenreService],
  controllers: [GenreController],
})
export class GenreModule {}
