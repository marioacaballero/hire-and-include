import { Injectable } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { compare } from 'bcrypt';
import { JwtPayload, sign } from 'jsonwebtoken';
import { ErrorManager } from '../../helpers/error.manager';
import { ProfileEntity } from '../../profile/entities/profile.entity';
import { ProfileCompanyEntity } from '../../profile/entities/profile-company.entity';

ConfigModule.forRoot({
  envFilePath: '.env',
});

const configService = new ConfigService();

@Injectable()
export class AuthService {
  constructor() {}

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

  // login validate
  public async loginValidate(
    password: string,
    profile: ProfileEntity | ProfileCompanyEntity,
  ) {
    try {
      //Check if password is correct
      const checkPassword = await compare(password, profile.password);

      if (!checkPassword)
        throw new ErrorManager({
          type: 'UNAUTHORIZED',
          message: 'The password is invalid',
        });
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  //Login Profile
  public async login(profile: ProfileEntity | ProfileCompanyEntity) {
    try {
      return {
        accesToken: this.signJWT({
          payload: { id: profile.id },
          secret: configService.get('JWT_SECRET'),
          expires: '22h',
        }),
        profile,
      };
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
