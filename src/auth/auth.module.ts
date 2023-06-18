import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ProfileEntity } from '../profile/entities/profile.entity';
import { jwtConstants } from '../constants/jwtConstants';
import { ProfileService } from '../profile/profile.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProfileEntity]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '20h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, ProfileService],
})
export class AuthModule {}
