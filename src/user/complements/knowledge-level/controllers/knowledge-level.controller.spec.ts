import { Test, TestingModule } from '@nestjs/testing';
import { KnowledgeLevelController } from './knowledge-level.controller';

xdescribe('KnowledgeLevelController', () => {
  let controller: KnowledgeLevelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KnowledgeLevelController],
    }).compile();

    controller = module.get<KnowledgeLevelController>(KnowledgeLevelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
