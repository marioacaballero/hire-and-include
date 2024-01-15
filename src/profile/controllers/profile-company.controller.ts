import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Query,
} from '@nestjs/common';
import { ProfileCompanyService } from '../services/profile-company.service';
import { ProfileCompanyUpdateDTO } from '../dto/profile-company.dto';

@Controller('profile-company')
export class ProfileCompanyController {
  constructor(private readonly profileCompanyService: ProfileCompanyService) {}

  @Get()
  public async getAll() {
    return await this.profileCompanyService.findAll();
  }

  @Get('search')
  public async getByEmail(@Query('email') email: string) {
    return await this.profileCompanyService.findOneByEmail(email);
  }

  @Get('id/:id')
  public async getOneById(@Param('id') id: string) {
    return await this.profileCompanyService.findOne(Number(id));
  }

  @Put('id/:id')
  public async editOne(
    @Param('id') id: string,
    @Body() body: ProfileCompanyUpdateDTO,
  ) {
    return await this.profileCompanyService.updateOne(Number(id), body);
  }

  @Delete('id/:id')
  public async deleteOne(@Param('id') id: string) {
    return await this.profileCompanyService.deleteOne(Number(id));
  }
}
