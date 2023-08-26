import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  // Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProfileService } from '../services/profile.service';
import { ProfileUpdateDTO } from '../dto/profile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  // Esto lo hace el registro, ya no es necesario aca
  // @Post()
  // public async createProfile(@Body() body: AuthDTO) {
  //   return await this.profileService.createProfile(body);
  // }

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
    return await this.profileService.findOne(Number(id));
  }

  @Put('id/:id')
  public async editOne(
    @Param('id') id: string,
    @Body() body: ProfileUpdateDTO,
  ) {
    return await this.profileService.updateOne(Number(id), body);
  }

  @Delete('id/:id')
  public async deleteOne(@Param('id') id: string) {
    return await this.profileService.deleteOne(Number(id));
  }
}
