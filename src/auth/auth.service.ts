import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';
import { JwtPayload, sign } from 'jsonwebtoken';
import { config } from 'dotenv';
import { ProfileService } from '../profile/profile.service';
import { ProfileDTO } from '../profile/dto/profile.dto';
import { ErrorManager } from '../helpers/error.manager';

config();

@Injectable()
export class AuthService {
  constructor(private readonly profileService: ProfileService) {}

  //Profile Register
  public async register(userObject: ProfileDTO) {
    try {
      //Hash password
      const { password } = userObject;
      const passToHash = await hash(password, +process.env.HASH_SALT);
      //Replace password with hashPassword
      userObject = { ...userObject, password: passToHash };
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
        findProfile,
      };
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
