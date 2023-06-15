import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ChargeService } from '../services/charge.service';
import { ChargeDTO, ChargeUpdateDTO } from '../dto/charge.dto';

@Controller('charge')
export class ChargeController {
  constructor(private readonly chargeService: ChargeService) {}

  @Post()
  public async createOne(@Body() body: ChargeDTO) {
    return await this.chargeService.createOne(body);
  }

  @Get()
  public async getAll() {
    return await this.chargeService.findAll();
  }

  @Get('id/:id')
  public async getOneById(@Param(':id') id: string) {
    return await this.chargeService.findOne(Number(id));
  }

  @Put('id/:id')
  public async editOne(@Param('id') id: string, @Body() body: ChargeUpdateDTO) {
    return await this.chargeService.updateOne(Number(id), body);
  }

  @Delete('id/:id')
  public async deleteOne(@Param('id') id: string) {
    return await this.chargeService.deleteOne(Number(id));
  }
}
