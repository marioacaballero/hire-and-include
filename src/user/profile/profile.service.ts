import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileEntity } from './entities/profile.entity';
import { ProfileDTO } from './dto/profile.dto';

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
}
