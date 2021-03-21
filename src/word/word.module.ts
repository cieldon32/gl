import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WordService } from './word.service';
import { WordResolver } from './word.resolver';
import {Word} from './word.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Word]),],
  providers: [WordService, WordResolver],
  exports: [WordService]
})
export class WordModule {}
