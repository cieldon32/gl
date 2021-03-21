import { Test, TestingModule } from '@nestjs/testing';
import { SyllableController } from './syllable.controller';

describe('SyllableController', () => {
  let controller: SyllableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SyllableController],
    }).compile();

    controller = module.get<SyllableController>(SyllableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
