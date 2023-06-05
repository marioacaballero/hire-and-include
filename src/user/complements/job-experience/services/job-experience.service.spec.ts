import { Test, TestingModule } from '@nestjs/testing';
import { JobExperienceService } from './job-experience.service';

xdescribe('JobExperienceService', () => {
  let service: JobExperienceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobExperienceService],
    }).compile();

    service = module.get<JobExperienceService>(JobExperienceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
