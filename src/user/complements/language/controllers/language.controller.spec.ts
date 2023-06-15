import { Test, TestingModule } from '@nestjs/testing';
import { LanguageController } from './language.controller';

xdescribe('LanguageController', () => {
  let controller: LanguageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LanguageController],
    }).compile();

    controller = module.get<LanguageController>(LanguageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
