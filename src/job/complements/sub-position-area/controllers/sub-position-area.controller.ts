import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SubPositionAreaService } from '../services/sub-position-area.service';
import {
  SubPositionAreaDTO,
  SubPositionAreaUpdateDTO,
} from '../dto/sub-position-area.dto';

@Controller('sub-position-area')
export class SubPositionAreaController {
  constructor(
    private readonly subPositionAreaService: SubPositionAreaService,
  ) {}

  @Post()
  public async addOne(@Body() body: SubPositionAreaDTO) {
    return await this.subPositionAreaService.createOne(body);
  }

  @Get()
  public async getAllSubs() {
    return await this.subPositionAreaService.findAll();
  }

  @Get('id/:id')
  public async getOneSub(@Param('id') id: string) {
    return await this.subPositionAreaService.findOne(id);
  }

  @Put('id/:id')
  public async updateOneSub(
    @Param('id') id: string,
    @Body() body: SubPositionAreaUpdateDTO,
  ) {
    return await this.subPositionAreaService.updateOne(id, body);
  }

  @Delete('id/:id')
  public async deleteOneSub(@Param('id') id: string) {
    return await this.subPositionAreaService.deleteOne(id);
  }
}
