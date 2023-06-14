import { Test, TestingModule } from '@nestjs/testing';
import { SeniorityService } from './seniority.service';

xdescribe('SeniorityService', () => {
  let service: SeniorityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeniorityService],
    }).compile();

    service = module.get<SeniorityService>(SeniorityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
