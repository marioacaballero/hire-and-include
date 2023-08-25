import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';
import { JwtPayload, sign } from 'jsonwebtoken';
import { config } from 'dotenv';
import { ProfileService } from '../../profile/services/profile.service';
import { ErrorManager } from '../../helpers/error.manager';
import { AuthDTO } from '../dto/auth.dto';

config();

@Injectable()
export class AuthService {
  constructor(private readonly profileService: ProfileService) {}

  //Profile Register
  public async register(userObject: AuthDTO) {
    try {
      //Hash password
      userObject.password = await hash(
        userObject.password,
        +process.env.HASH_SALT,
      );
      return this.profileService.createProfile(userObject);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public signJWT({
    payload,
    secret,
    expires,
  }: {
    payload: JwtPayload;
    secret: string;
    expires: number | string;
  }): string {
    return sign(payload, secret, { expiresIn: expires });
  }

  //Login Profile
  public async login(email: string, password: string) {
    try {
      //Check if profile exists
      const findProfile = await this.profileService.findOneByEmail(email);

      if (!findProfile)
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: `The profile not found with email: ${email}`,
        });

      //Check if password is correct
      const checkPassword = await compare(password, findProfile.password);

      if (!checkPassword)
        throw new ErrorManager({
          type: 'UNAUTHORIZED',
          message: 'The password is invalid',
        });

      const payload = { id: findProfile.id };

      return {
        accesToken: this.signJWT({
          payload,
          secret: process.env.JWT_SECRET,
          expires: '22h',
        }),
        profile: findProfile,
      };
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
