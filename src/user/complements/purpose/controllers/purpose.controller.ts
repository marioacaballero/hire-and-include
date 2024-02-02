import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PurposeService } from '../services/purpose.service';
import { PurposeDTO, PurposeUpdateDTO } from '../dto/purpose.dto';

@Controller('purpose')
export class PurposeController {
  constructor(private readonly purposeService: PurposeService) {}

  @Post()
  public async createOne(@Body() body: PurposeDTO) {
    return await this.purposeService.createOne(body);
  }

  @Get()
  public async getAll() {
    return await this.purposeService.findAll();
  }

  @Get('id/:id')
  public async getOneById(@Param(':id') id: string) {
    return await this.purposeService.findOne(id);
  }

  @Put('id/:id')
  public async editOne(
    @Param('id') id: string,
    @Body() body: PurposeUpdateDTO,
  ) {
    return await this.purposeService.updateOne(id, body);
  }

  @Delete('id/:id')
  public async deleteOne(@Param('id') id: string) {
    return await this.purposeService.deleteOne(id);
  }
}
