import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PositionAreaService } from '../services/position-area.service';
import {
  PositionAreaDTO,
  PositionAreaUpdateDTO,
} from '../dto/postion-area.dto';

@Controller('position-area')
export class PositionAreaController {
  constructor(private readonly positionAreaService: PositionAreaService) {}

  @Post()
  public async createOnePosition(@Body() body: PositionAreaDTO) {
    return await this.positionAreaService.createOne(body);
  }

  @Get()
  public async findAllPosition() {
    return await this.positionAreaService.findAll();
  }

  @Get('id/:id')
  public async findOnePosition(@Param('id') id: string) {
    return await this.positionAreaService.findOne(+id);
  }

  @Put('id/:id')
  public async updateOnePosition(
    @Param('id') id: string,
    @Body() body: PositionAreaUpdateDTO,
  ) {
    return await this.positionAreaService.updateOne(+id, body);
  }

  @Delete('id/:id')
  public async deleteOnePosition(@Param('id') id: string) {
    return await this.positionAreaService.deleteOne(+id);
  }
}
