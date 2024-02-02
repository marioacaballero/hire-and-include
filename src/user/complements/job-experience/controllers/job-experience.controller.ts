import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { JobExperienceService } from '../services/job-experience.service';
import {
  JobExperienceDTO,
  JobExperienceUpdateDTO,
} from '../dto/job-experience.dto';

@Controller('job-experience')
export class JobExperienceController {
  constructor(private readonly jobexpService: JobExperienceService) {}

  @Post()
  public async createOne(@Body() body: JobExperienceDTO) {
    return await this.jobexpService.createOne(body);
  }

  @Get()
  public async getAll() {
    return await this.jobexpService.findAll();
  }

  @Get('id/:id')
  public async getOneById(@Param(':id') id: string) {
    return await this.jobexpService.findOne(id);
  }

  @Put('id/:id')
  public async editOne(
    @Param('id') id: string,
    @Body() body: JobExperienceUpdateDTO,
  ) {
    return await this.jobexpService.updateOne(id, body);
  }

  @Delete('id/:id')
  public async deleteOne(@Param('id') id: string) {
    return await this.jobexpService.deleteOne(id);
  }
}
