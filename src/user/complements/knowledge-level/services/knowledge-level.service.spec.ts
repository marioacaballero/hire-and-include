import { Test, TestingModule } from '@nestjs/testing';
import { KnowledgeLevelService } from './knowledge-level.service';

xdescribe('KnowledgeLevelService', () => {
  let service: KnowledgeLevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KnowledgeLevelService],
    }).compile();

    service = module.get<KnowledgeLevelService>(KnowledgeLevelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
