import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SkillService } from '../services/skill.service';
import { SkillDTO, SkillUpdateDTO } from '../dto/skill.dto';

@Controller('skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Post()
  public async createOne(@Body() body: SkillDTO) {
    return await this.skillService.createSkill(body);
  }

  @Get()
  public async getAll() {
    return await this.skillService.findAllSkills();
  }

  @Get('id/:id')
  public async getOneById(@Param(':id') id: string) {
    return await this.skillService.findOneSkill(id);
  }

  @Put('id/:id')
  public async editOne(@Param('id') id: string, @Body() body: SkillUpdateDTO) {
    return await this.skillService.updateOneSkill(id, body);
  }

  @Delete('id/:id')
  public async deleteOne(@Param('id') id: string) {
    return await this.skillService.deleteOneSkill(id);
  }
}
