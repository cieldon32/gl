import { Module } from '@nestjs/common';
import { SyllableController } from './syllable.controller';
import { SyllableService } from './syllable.service';

@Module({
  controllers: [SyllableController],
  providers: [SyllableService]
})
export class SyllableModule {}
