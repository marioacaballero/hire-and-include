import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ProfileDTO } from '../user/profile/dto/profile.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //Register User(Profile)
  @Post('register')
  registerUser(@Body() userObject: ProfileDTO) {
    return this.authService.register(userObject);
  }

  // Login User
  @Post('login')
  loginUser(@Body() userObject: ProfileDTO) {
    return this.authService.login(userObject);
  }
}
