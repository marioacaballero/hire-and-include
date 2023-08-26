import { Global, Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { ProfileService } from '../profile/services/profile.service';
import { ProfileModule } from '../profile/profile.module';

@Global()
@Module({
  imports: [ProfileModule],
  controllers: [AuthController],
  providers: [AuthService, ProfileService],
})
export class AuthModule {}
