import { Test, TestingModule } from '@nestjs/testing';
import { PurposeService } from './purpose.service';

xdescribe('PurposeService', () => {
  let service: PurposeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurposeService],
    }).compile();

    service = module.get<PurposeService>(PurposeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
