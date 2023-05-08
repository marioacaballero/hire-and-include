import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ProfileDTO } from 'src/user/profile/dto/profile.dto';
// import { LoginAuthDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //Register User(Profile)
  @Post()
  registerUser(@Body() userObject: ProfileDTO) {
    return this.authService.register(userObject);
  }

  //Login User
  // @Post()
}
