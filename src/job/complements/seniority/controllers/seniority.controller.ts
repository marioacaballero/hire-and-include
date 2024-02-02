import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SeniorityService } from '../services/seniority.service';
import { SeniorityDTO, SeniorityUpdateDTO } from '../dto/seniority.dto';

@Controller('seniority')
export class SeniorityController {
  constructor(private readonly seniorityService: SeniorityService) {}

  @Post()
  public async createOne(@Body() body: SeniorityDTO) {
    return await this.seniorityService.createOne(body);
  }

  @Get()
  public async getAll() {
    return await this.seniorityService.findAll();
  }

  @Get('id/:id')
  public async getOneById(@Param('id') id: string) {
    return await this.seniorityService.findOne(id);
  }

  @Put('id/:id')
  public async editOne(
    @Param('id') id: string,
    @Body() body: SeniorityUpdateDTO,
  ) {
    return await this.seniorityService.updateOne(id, body);
  }

  @Delete('id/:id')
  public async deleteOne(@Param('id') id: string) {
    return await this.seniorityService.deleteOne(id);
  }
}
