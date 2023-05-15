import { Body, Controller, Post } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileDTO } from './dto/profile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  public async createProfile(@Body() body: ProfileDTO) {
    return await this.profileService.createProfile(body);
  }
}
