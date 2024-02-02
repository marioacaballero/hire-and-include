import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { JobRelationService } from '../services/job-relation.service';
import { JobRelationDTO, JobRelationUpdateDTO } from '../dto/job-relation.dto';

@Controller('job-relation')
export class JobRelationController {
  constructor(private readonly jobrelationService: JobRelationService) {}

  @Post()
  public async createOne(@Body() body: JobRelationDTO) {
    return await this.jobrelationService.createOne(body);
  }

  @Get()
  public async getAll() {
    return await this.jobrelationService.findAll();
  }

  @Get('id/:id')
  public async getOneById(@Param('id') id: string) {
    return await this.jobrelationService.findOne(id);
  }

  @Put('id/:id')
  public async editOne(
    @Param('id') id: string,
    @Body() body: JobRelationUpdateDTO,
  ) {
    return await this.jobrelationService.updateOne(id, body);
  }

  @Delete('id/:id')
  public async deleteOne(@Param('id') id: string) {
    return await this.jobrelationService.deleteOne(id);
  }
}
