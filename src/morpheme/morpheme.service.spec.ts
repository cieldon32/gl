import { Test, TestingModule } from '@nestjs/testing';
import { MorphemeService } from './morpheme.service';

describe('MorphemeService', () => {
  let service: MorphemeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MorphemeService],
    }).compile();

    service = module.get<MorphemeService>(MorphemeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
