import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ModeService } from '../services/mode.service';
import { ModeDTO, ModeUpdateDTO } from '../dto/mode.dto';

@Controller('mode')
export class ModeController {
  constructor(private readonly modeService: ModeService) {}

  @Post()
  public async createOne(@Body() body: ModeDTO) {
    return await this.modeService.createOne(body);
  }

  @Get()
  public async getAll() {
    return await this.modeService.findAll();
  }

  @Get('id/:id')
  public async getOneById(@Param(':id') id: string) {
    return await this.modeService.findOne(Number(id));
  }

  @Put('id/:id')
  public async editOne(@Param('id') id: string, @Body() body: ModeUpdateDTO) {
    return await this.modeService.updateOne(Number(id), body);
  }

  @Delete('id/:id')
  public async deleteOne(@Param('id') id: string) {
    return await this.modeService.deleteOne(Number(id));
  }
}
