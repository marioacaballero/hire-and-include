import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GenreService } from '../services/genre.service';
import { GenreDTO, GenreUpdateDTO } from '../dto/genre.dto';

@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Post()
  public async createOne(@Body() body: GenreDTO) {
    return await this.genreService.createOne(body);
  }

  @Get()
  public async getAll() {
    return await this.genreService.findAll();
  }

  @Get('id/:id')
  public async getOneById(@Param(':id') id: string) {
    return await this.genreService.findOne(Number(id));
  }

  @Put('id/:id')
  public async editOne(@Param('id') id: string, @Body() body: GenreUpdateDTO) {
    return await this.genreService.updateOne(Number(id), body);
  }

  @Delete('id/:id')
  public async deleteOne(@Param('id') id: string) {
    return await this.genreService.deleteOne(Number(id));
  }
}
