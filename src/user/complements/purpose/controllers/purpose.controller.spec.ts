import { Test, TestingModule } from '@nestjs/testing';
import { PurposeController } from './purpose.controller';

xdescribe('PurposeController', () => {
  let controller: PurposeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurposeController],
    }).compile();

    controller = module.get<PurposeController>(PurposeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
