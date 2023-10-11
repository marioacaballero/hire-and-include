import { Test, TestingModule } from '@nestjs/testing';
import { SubPositionAreaController } from './sub-position-area.controller';

xdescribe('SubPositionAreaController', () => {
  let controller: SubPositionAreaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubPositionAreaController],
    }).compile();

    controller = module.get<SubPositionAreaController>(
      SubPositionAreaController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
