import { Test, TestingModule } from '@nestjs/testing';
import { DisabilityService } from './disability.service';

xdescribe('DisabilityService', () => {
  let service: DisabilityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DisabilityService],
    }).compile();

    service = module.get<DisabilityService>(DisabilityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
