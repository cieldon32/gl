import { Test, TestingModule } from '@nestjs/testing';
import { MorphemeController } from './morpheme.controller';

describe('MorphemeController', () => {
  let controller: MorphemeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MorphemeController],
    }).compile();

    controller = module.get<MorphemeController>(MorphemeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
