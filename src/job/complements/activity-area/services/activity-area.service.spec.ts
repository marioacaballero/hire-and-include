import { Test, TestingModule } from '@nestjs/testing';
import { ActivityAreaService } from './activity-area.service';

xdescribe('ActivityAreaService', () => {
  let service: ActivityAreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActivityAreaService],
    }).compile();

    service = module.get<ActivityAreaService>(ActivityAreaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
