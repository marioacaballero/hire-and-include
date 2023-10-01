import { Test, TestingModule } from '@nestjs/testing';
import { UserRecomendationService } from './user-recomendation.service';

describe('UserRecomendationService', () => {
  let service: UserRecomendationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRecomendationService],
    }).compile();

    service = module.get<UserRecomendationService>(UserRecomendationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
