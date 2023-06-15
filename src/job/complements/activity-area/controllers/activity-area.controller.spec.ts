import { Test, TestingModule } from '@nestjs/testing';
import { ActivityAreaController } from './activity-area.controller';

xdescribe('ActivityAreaController', () => {
  let controller: ActivityAreaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivityAreaController],
    }).compile();

    controller = module.get<ActivityAreaController>(ActivityAreaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
