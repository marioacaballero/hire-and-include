import { Test, TestingModule } from '@nestjs/testing';
import { JobRelationController } from './job-relation.controller';

xdescribe('JobRelationController', () => {
  let controller: JobRelationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobRelationController],
    }).compile();

    controller = module.get<JobRelationController>(JobRelationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
