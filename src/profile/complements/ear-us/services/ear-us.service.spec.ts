import { Test, TestingModule } from '@nestjs/testing';
import { EarUsService } from './ear-us.service';

xdescribe('EarUsService', () => {
  let service: EarUsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EarUsService],
    }).compile();

    service = module.get<EarUsService>(EarUsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
