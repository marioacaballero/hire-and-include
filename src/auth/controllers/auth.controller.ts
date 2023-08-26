import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { AuthDTO } from '../dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //Register User(Profile)
  @Post('register')
  registerUser(@Body() userObject: AuthDTO) {
    return this.authService.register(userObject);
  }

  // Login User
  @Post('login')
  loginUser(@Body() { email, password }: AuthDTO) {
    return this.authService.login(email, password);
  }
}
