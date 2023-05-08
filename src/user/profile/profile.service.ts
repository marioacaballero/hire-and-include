import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileEntity } from './entities/profile.entity';
import { ProfileDTO } from './dto/profile.dto';
import { HttpException } from '@nestjs/common';

export class ProfileService {
  constructor(
    @InjectRepository(ProfileEntity)
    private readonly profileRepository: Repository<ProfileEntity>,
  ) {}

  public async createProfile(body: ProfileDTO): Promise<any> {
    try {
      const profile: ProfileEntity = await this.profileRepository.save(body);
      if (!profile) {
        return 'bad response';
      }
      return profile;
    } catch (error) {
      console.log(error);
    }
  }

  public async findOneByEmail(email: string): Promise<ProfileEntity> {
    try {
      const profile: ProfileEntity = await this.profileRepository
        .createQueryBuilder('profile')
        .where({ email })
        .getOne();

      if (!profile) {
        throw new HttpException('Profile Not Found', 404);
      }

      return profile;
    } catch (error) {
      console.log(error);
    }
  }
}
