import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { JobService } from '../services/job.service';
import { JobDTO, JobUpdateDTO } from '../dto/job.dto';

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Post()
  public async createOne(@Body() body: JobDTO) {
    return await this.jobService.createOne(body);
  }

  @Get()
  public async getAll() {
    return await this.jobService.findAll();
  }

  @Get('id/:id')
  public async getOneById(@Param(':id') id: string) {
    return await this.jobService.findOne(Number(id));
  }

  @Put('id/:id')
  public async editOne(@Param('id') id: string, @Body() body: JobUpdateDTO) {
    return await this.jobService.updateOne(Number(id), body);
  }

  @Delete('id/:id')
  public async deleteOne(@Param('id') id: string) {
    return await this.jobService.deleteOne(Number(id));
  }
}
