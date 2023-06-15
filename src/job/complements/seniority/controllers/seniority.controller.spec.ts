import { Test, TestingModule } from '@nestjs/testing';
import { SeniorityController } from './seniority.controller';

xdescribe('SeniorityController', () => {
  let controller: SeniorityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeniorityController],
    }).compile();

    controller = module.get<SeniorityController>(SeniorityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
