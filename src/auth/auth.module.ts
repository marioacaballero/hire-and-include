import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ProfileEntity } from '../user/profile/entities/profile.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileEntity])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
