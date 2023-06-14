import { Test, TestingModule } from '@nestjs/testing';
import { JobRelationService } from './job-relation.service';

xdescribe('JobRelationService', () => {
  let service: JobRelationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobRelationService],
    }).compile();

    service = module.get<JobRelationService>(JobRelationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
