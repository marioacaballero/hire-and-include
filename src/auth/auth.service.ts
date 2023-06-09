import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ProfileService } from '../profile/profile.service';
import { ProfileDTO } from '../profile/dto/profile.dto';
import { ProfileEntity } from '../profile/entities/profile.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(ProfileEntity)
    private readonly profileRepository: Repository<ProfileEntity>,
    private readonly profileService: ProfileService,
    private jwtService: JwtService,
  ) {}

  //Profile Register
  async register(userObject: ProfileDTO) {
    //Hash password
    const { password } = userObject;
    const passToHash = await hash(password, 10);
    //Replace password with hashPassword
    userObject = { ...userObject, password: passToHash };
    return this.profileService.createProfile(userObject);
  }

  //Login Profile
  async login(userObject: ProfileDTO) {
    //Check if profile exists
    const { email, password } = userObject;
    const findProfile = await this.profileService.findOneByEmail(email);

    if (!findProfile) throw new HttpException('Profile not found', 404);

    //Check if password is correct
    const checkPassword = await compare(password, findProfile.password);

    if (!checkPassword) throw new HttpException('Invalid Password', 403);

    const payload = { id: findProfile.id };
    const token = await this.jwtService.sign(payload);

    const data = {
      user: findProfile,
      token: token,
    };
    return data;
  }
}
