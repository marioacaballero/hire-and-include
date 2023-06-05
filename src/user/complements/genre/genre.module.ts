import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenreService } from './services/genre.service';
import { GenreEntity } from './entities/genre.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GenreEntity])],
  providers: [GenreService],
})
export class GenreModule {}
