import { Test, TestingModule } from '@nestjs/testing';
import { SubPositionAreaService } from './sub-position-area.service';

xdescribe('SubPositionAreaService', () => {
  let service: SubPositionAreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubPositionAreaService],
    }).compile();

    service = module.get<SubPositionAreaService>(SubPositionAreaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
