import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RecomendationService } from '../services/recomendation.service';
import {
  RecomendationDTO,
  RecomendationUpdateDTO,
} from '../dto/recomendation.dto';

@Controller('recomendation')
export class RecomendationController {
  constructor(private readonly recomendationService: RecomendationService) {}

  @Post()
  public async addOne(@Body() body: RecomendationDTO) {
    return this.recomendationService.createOne(body);
  }

  @Get()
  public async getAll() {
    return this.recomendationService.findAll();
  }

  @Get('id/:id')
  public async getOneById(@Param('id') id: string) {
    return this.recomendationService.findOne(id);
  }

  @Put('id/:id')
  public async editOne(
    @Param('id') id: string,
    @Body() body: RecomendationUpdateDTO,
  ) {
    return this.recomendationService.updateOne(id, body);
  }

  @Delete('id/:id')
  public async removeOne(@Param('id') id: string) {
    return this.recomendationService.deleteOne(id);
  }
}
