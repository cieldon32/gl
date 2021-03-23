import { Module } from '@nestjs/common';
import { PhonemeService } from './phoneme.service';
import {PhonemeResolver} from './phoneme.resolver';


@Module({
  providers: [PhonemeService, PhonemeResolver],
  exports: [PhonemeService]
})
export class PhonemeModule {}
