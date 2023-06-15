import { Test, TestingModule } from '@nestjs/testing';
import { ModeController } from './mode.controller';

xdescribe('ModeController', () => {
  let controller: ModeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModeController],
    }).compile();

    controller = module.get<ModeController>(ModeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
