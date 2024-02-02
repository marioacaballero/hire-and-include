import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CompanyService } from '../services/company.service';
import { CompanyDTO, CompanyUpdateDTO } from '../dto/company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  public async createOne(@Body() body: CompanyDTO) {
    return await this.companyService.createOne(body);
  }

  @Get()
  public async getAll() {
    return await this.companyService.findAll();
  }

  @Get('id/:id')
  public async getOneById(@Param('id') id: string) {
    return await this.companyService.findOne(id);
  }

  @Put('id/:id')
  public async editOne(
    @Param('id') id: string,
    @Body() body: CompanyUpdateDTO,
  ) {
    return await this.companyService.updateOne(id, body);
  }

  @Delete('id/:id')
  public async deleteOne(@Param('id') id: string) {
    return await this.companyService.deleteOne(id);
  }
}
