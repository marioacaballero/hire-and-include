import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { KnowledgeLevelService } from '../services/knowledge-level.service';
import {
  KnowledgeLevelDTO,
  KnowledgeLevelUpdateDTO,
} from '../dto/knowledge-level.dto';

@Controller('knowledge-level')
export class KnowledgeLevelController {
  constructor(private readonly knowledgeService: KnowledgeLevelService) {}

  @Post()
  public async createOne(@Body() body: KnowledgeLevelDTO) {
    return await this.knowledgeService.createOne(body);
  }

  @Get()
  public async getAll() {
    return await this.knowledgeService.findAll();
  }

  @Get('id/:id')
  public async getOneById(@Param(':id') id: string) {
    return await this.knowledgeService.findOne(id);
  }

  @Put('id/:id')
  public async editOne(
    @Param('id') id: string,
    @Body() body: KnowledgeLevelUpdateDTO,
  ) {
    return await this.knowledgeService.updateOne(id, body);
  }

  @Delete('id/:id')
  public async deleteOne(@Param('id') id: string) {
    return await this.knowledgeService.deleteOne(id);
  }
}
