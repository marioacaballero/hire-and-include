import { Test, TestingModule } from '@nestjs/testing';
import { ModeService } from './mode.service';

xdescribe('ModeService', () => {
  let service: ModeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModeService],
    }).compile();

    service = module.get<ModeService>(ModeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
