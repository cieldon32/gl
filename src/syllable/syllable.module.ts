import { Module } from '@nestjs/common';
import { SyllableService } from './syllable.service';
import {SyllableResolver} from './syllable.resolver';

@Module({
  providers: [SyllableService, SyllableResolver],
  exports: [SyllableService]
})
export class SyllableModule {}
