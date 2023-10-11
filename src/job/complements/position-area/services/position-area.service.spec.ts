import { Test, TestingModule } from '@nestjs/testing';
import { PositionAreaService } from './position-area.service';

xdescribe('PositionAreaService', () => {
  let service: PositionAreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PositionAreaService],
    }).compile();

    service = module.get<PositionAreaService>(PositionAreaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
