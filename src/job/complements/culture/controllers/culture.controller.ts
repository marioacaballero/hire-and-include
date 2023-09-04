import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CultureService } from '../services/culture.service';
import { CultureDTO, CultureUpdateDTO } from '../dto/culture.dto';

@Controller('culture')
export class CultureController {
  constructor(private readonly cultureService: CultureService) {}

  @Post()
  public async createOne(@Body() body: CultureDTO) {
    return await this.cultureService.createOne(body);
  }

  @Get()
  public async getAll() {
    return await this.cultureService.findAll();
  }

  @Get('id/:id')
  public async getOneById(@Param('id') id: string) {
    return await this.cultureService.findOne(Number(id));
  }

  @Put('id/:id')
  public async editOne(
    @Param('id') id: string,
    @Body() body: CultureUpdateDTO,
  ) {
    return await this.cultureService.updateOne(Number(id), body);
  }

  @Delete('id/:id')
  public async deleteOne(@Param('id') id: string) {
    return await this.cultureService.deleteOne(Number(id));
  }
}
