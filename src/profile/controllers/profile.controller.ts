import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Query,
} from '@nestjs/common';
import { ProfileService } from '../services/profile.service';
import { ProfileUpdateDTO } from '../dto/profile.dto';

@Controller('profile-user')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  public async getAll() {
    return await this.profileService.findAll();
  }

  @Get('search')
  public async getByEmail(@Query('email') email: string) {
    return await this.profileService.findOneByEmail(email);
  }

  @Get('id/:id')
  public async getOneById(@Param('id') id: string) {
    return await this.profileService.findOne(id);
  }

  @Put('id/:id')
  public async editOne(
    @Param('id') id: string,
    @Body() body: ProfileUpdateDTO,
  ) {
    return await this.profileService.updateOne(id, body);
  }

  @Delete('id/:id')
  public async deleteOne(@Param('id') id: string) {
    return await this.profileService.deleteOne(id);
  }
}
