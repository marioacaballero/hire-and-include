import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ProfileService } from '../profile/profile.service';
import { ProfileModule } from '../profile/profile.module';

@Global()
@Module({
  imports: [ProfileModule],
  controllers: [AuthController],
  providers: [AuthService, ProfileService],
})
export class AuthModule {}
