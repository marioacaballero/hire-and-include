import { Test, TestingModule } from '@nestjs/testing';
import { DisabilityController } from './disability.controller';

xdescribe('DisabilityController', () => {
  let controller: DisabilityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DisabilityController],
    }).compile();

    controller = module.get<DisabilityController>(DisabilityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
