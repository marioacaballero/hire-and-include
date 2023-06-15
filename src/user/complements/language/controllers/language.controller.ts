import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LanguageService } from '../services/language.service';
import { LanguageDTO, LanguageUpdateDTO } from '../dto/lenguage.dto';

@Controller('language')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @Post()
  public async createOne(@Body() body: LanguageDTO) {
    return await this.languageService.createOne(body);
  }

  @Get()
  public async getAll() {
    return await this.languageService.findAll();
  }

  @Get('id/:id')
  public async getOneById(@Param(':id') id: string) {
    return await this.languageService.findOne(Number(id));
  }

  @Put('id/:id')
  public async editOne(
    @Param('id') id: string,
    @Body() body: LanguageUpdateDTO,
  ) {
    return await this.languageService.updateOne(Number(id), body);
  }

  @Delete('id/:id')
  public async deleteOne(@Param('id') id: string) {
    return await this.languageService.deleteOne(Number(id));
  }
}
