import { Test, TestingModule } from '@nestjs/testing';
import { RecomendationController } from './recomendation.controller';

xdescribe('RecomendationController', () => {
  let controller: RecomendationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecomendationController],
    }).compile();

    controller = module.get<RecomendationController>(RecomendationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
