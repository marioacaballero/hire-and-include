import { Test, TestingModule } from '@nestjs/testing';
import { JobExperienceController } from './job-experience.controller';

xdescribe('JobExperienceController', () => {
  let controller: JobExperienceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobExperienceController],
    }).compile();

    controller = module.get<JobExperienceController>(JobExperienceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
