import { Test, TestingModule } from '@nestjs/testing';
import { EarUsController } from './ear-us.controller';

xdescribe('EarUsController', () => {
  let controller: EarUsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EarUsController],
    }).compile();

    controller = module.get<EarUsController>(EarUsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
