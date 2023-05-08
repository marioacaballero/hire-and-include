import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileEntity } from '../user/profile/entities/profile.entity';
import { Repository } from 'typeorm';
// import { LoginAuthDto } from './dto/login-auth.dto';
import { hash } from 'bcrypt';
import { ProfileService } from '../user/profile/profile.service';
import { ProfileDTO } from '../user/profile/dto/profile.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(ProfileEntity)
    private readonly profileRepository: Repository<ProfileEntity>,
    private readonly profileService: ProfileService,
  ) {}

  async register(userObject: ProfileDTO) {
    const { password } = userObject;
    const passToHash = await hash(password, 10);
    userObject = { ...userObject, password: passToHash };
    return this.profileService.createProfile(userObject);
  }
}
