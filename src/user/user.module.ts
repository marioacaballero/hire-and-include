import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './services/user.service';
import { UserEntity } from './entities/user.entity';
import { UserController } from './controllers/user.controller';
import { ProfileService } from '../profile/services/profile.service';
import { ProfileEntity } from '../profile/entities/profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, ProfileEntity])],
  controllers: [UserController],
  providers: [UserService, ProfileService],
})
export class UserModule {}
