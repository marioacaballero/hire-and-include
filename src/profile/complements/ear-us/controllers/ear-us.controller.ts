import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EarUsService } from '../services/ear-us.service';
import { EarUsDTO, EarUsUpdateDTO } from '../dto/ear-us.dto';

@Controller('ear-us')
export class EarUsController {
  constructor(private readonly earusService: EarUsService) {}

  @Post()
  public async createOne(@Body() body: EarUsDTO) {
    return await this.earusService.createOne(body);
  }

  @Get()
  public async getAll() {
    return await this.earusService.findAll();
  }

  @Get('id/:id')
  public async getOneById(@Param(':id') id: string) {
    return await this.earusService.findOne(Number(id));
  }

  @Put('id/:id')
  public async editOne(@Param('id') id: string, @Body() body: EarUsUpdateDTO) {
    return await this.earusService.updateOne(Number(id), body);
  }

  @Delete('id/:id')
  public async deleteOne(@Param('id') id: string) {
    return await this.earusService.deleteOne(Number(id));
  }
}
