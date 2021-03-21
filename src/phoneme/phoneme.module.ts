import { Module } from '@nestjs/common';
import { PhonemeController } from './phoneme.controller';
import { PhonemeService } from './phoneme.service';

@Module({
  controllers: [PhonemeController],
  providers: [PhonemeService]
})
export class PhonemeModule {}
