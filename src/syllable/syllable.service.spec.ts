import { Test, TestingModule } from '@nestjs/testing';
import { SyllableService } from './syllable.service';

describe('SyllableService', () => {
  let service: SyllableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SyllableService],
    }).compile();

    service = module.get<SyllableService>(SyllableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
