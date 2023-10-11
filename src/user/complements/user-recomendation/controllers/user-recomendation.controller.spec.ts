import { Test, TestingModule } from '@nestjs/testing';
import { UserRecomendationController } from './user-recomendation.controller';

xdescribe('UserRecomendationController', () => {
  let controller: UserRecomendationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserRecomendationController],
    }).compile();

    controller = module.get<UserRecomendationController>(
      UserRecomendationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
