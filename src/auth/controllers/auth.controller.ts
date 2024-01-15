import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { AuthLoginDTO } from '../dto/auth.dto';
import { ProfileDTO } from '../../profile/dto/profile.dto';
import { ProfileService } from '../../profile/services/profile.service';
import { ProfileCompanyService } from '../../profile/services/profile-company.service';
import { ProfileCompanyDTO } from '../../profile/dto/profile-company.dto';
import { EarUsService } from 'src/profile/complements/ear-us/services/ear-us.service';
import { ActivityAreaService } from 'src/job/complements/activity-area/services/activity-area.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly profileService: ProfileService,
    private readonly profileCompanyService: ProfileCompanyService,
    private readonly earUsService: EarUsService,
    private readonly activityAreaService: ActivityAreaService,
  ) {}

  //Register User(Profile)
  @Post('register-profile')
  async registerUser(@Body() userObject: ProfileDTO) {
    if (userObject.earUs) {
      const earUs = await this.earUsService.findOne(userObject.earUs.id);
      userObject.earUs = earUs;
    }
    return this.profileService.register(userObject);
  }

  //Register Company(Profile)
  @Post('register-company')
  async registerComapny(@Body() userObject: ProfileCompanyDTO) {
    if (userObject.activityArea) {
      const activityArea = await this.activityAreaService.findOne(
        userObject.activityArea.id,
      );
      userObject.activityArea = activityArea;
    }
    return this.profileCompanyService.register(userObject);
  }

  // Login User
  @Post('login-profile')
  async loginUser(@Body() body: AuthLoginDTO) {
    const user = await this.profileService.findOneByEmail(body.email);
    await this.authService.loginValidate(body.password, user);
    return this.authService.login(user);
  }
  // Login User
  @Post('login-company')
  async loginComapny(@Body() body: AuthLoginDTO) {
    const user = await this.profileCompanyService.findOneByEmail(body.email);
    await this.authService.loginValidate(body.password, user);
    return this.authService.login(user);
  }
}
