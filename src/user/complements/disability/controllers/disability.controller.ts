import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DisabilityService } from '../services/disability.service';
import { DisabilityDTO, DisabilityUpdateDTO } from '../dto/disability.dto';

@Controller('disability')
export class DisabilityController {
  constructor(private readonly disabilityService: DisabilityService) {}

  @Post()
  public async createOne(@Body() body: DisabilityDTO) {
    return await this.disabilityService.createOne(body);
  }

  @Get()
  public async getAll() {
    return await this.disabilityService.findAll();
  }

  @Get('id/:id')
  public async getOneById(@Param(':id') id: string) {
    return await this.disabilityService.findOne(Number(id));
  }

  @Put('id/:id')
  public async editOne(
    @Param('id') id: string,
    @Body() body: DisabilityUpdateDTO,
  ) {
    return await this.disabilityService.updateOne(Number(id), body);
  }

  @Delete('id/:id')
  public async deleteOne(@Param('id') id: string) {
    return await this.disabilityService.deleteOne(Number(id));
  }
}
