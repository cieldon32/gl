import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WordService } from './word.service';
import { WordResolver } from './word.resolver';
import {Word} from './word.entity';
import {MorphemeModule} from 'src/morpheme';
import {SyllableModule} from 'src/syllable';
import {PhonemeModule} from 'src/phoneme';

@Module({
  imports: [
    forwardRef(() => MorphemeModule),
    forwardRef(() => SyllableModule),
    forwardRef(() => PhonemeModule),
    TypeOrmModule.forFeature([Word]),
  ],
  providers: [WordService, WordResolver],
  exports: [WordService]
})
export class WordModule {}
