import { Module } from '@nestjs/common';
import {MorphemeResolver} from './morpheme.resolver';
import { MorphemeService } from './morpheme.service';

@Module({
  providers: [MorphemeService, MorphemeResolver],
  exports: [MorphemeService]
})
export class MorphemeModule {}
