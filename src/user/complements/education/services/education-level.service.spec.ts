import { Test, TestingModule } from '@nestjs/testing';
import { EducationLevelService } from './education-level.service';

xdescribe('EducationLevelService', () => {
  let service: EducationLevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EducationLevelService],
    }).compile();

    service = module.get<EducationLevelService>(EducationLevelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
