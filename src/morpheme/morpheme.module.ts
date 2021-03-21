import { Module } from '@nestjs/common';
import { MorphemeController } from './morpheme.controller';
import { MorphemeService } from './morpheme.service';

@Module({
  controllers: [MorphemeController],
  providers: [MorphemeService]
})
export class MorphemeModule {}
