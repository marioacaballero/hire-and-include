import { Test, TestingModule } from '@nestjs/testing';
import { PositionAreaController } from './position-area.controller';

xdescribe('PositionAreaController', () => {
  let controller: PositionAreaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PositionAreaController],
    }).compile();

    controller = module.get<PositionAreaController>(PositionAreaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
