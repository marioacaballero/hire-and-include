import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ActivityAreaService } from '../services/activity-area.service';
import {
  ActivityAreaDTO,
  ActivityAreaUpdateDTO,
} from '../dto/activity-areas.dto';

@Controller('activity-area')
export class ActivityAreaController {
  constructor(private readonly activityService: ActivityAreaService) {}

  @Post()
  public async createOne(@Body() body: ActivityAreaDTO) {
    return await this.activityService.createOne(body);
  }

  @Get()
  public async getAll() {
    return await this.activityService.findAll();
  }

  @Get('id/:id')
  public async getOneById(@Param(':id') id: string) {
    return await this.activityService.findOne(Number(id));
  }

  @Put('id/:id')
  public async editOne(
    @Param('id') id: string,
    @Body() body: ActivityAreaUpdateDTO,
  ) {
    return await this.activityService.updateOne(Number(id), body);
  }

  @Delete('id/:id')
  public async deleteOne(@Param('id') id: string) {
    return await this.activityService.deleteOne(Number(id));
  }
}
