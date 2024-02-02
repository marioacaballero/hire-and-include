import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EducationService } from '../services/education.service';
import { EducationDTO, EducationUpdateDTO } from '../dto/education.dto';

@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Post()
  public async createOne(@Body() body: EducationDTO) {
    return await this.educationService.createOne(body);
  }

  @Get()
  public async getAll() {
    return await this.educationService.findAll();
  }

  @Get('id/:id')
  public async getOneById(@Param(':id') id: string) {
    return await this.educationService.findOne(id);
  }

  @Put('id/:id')
  public async editOne(
    @Param('id') id: string,
    @Body() body: EducationUpdateDTO,
  ) {
    return await this.educationService.updateOne(id, body);
  }

  @Delete('id/:id')
  public async deleteOne(@Param('id') id: string) {
    return await this.educationService.deleteOne(id);
  }
}
