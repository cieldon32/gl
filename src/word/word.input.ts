import { Field, InputType } from '@nestjs/graphql';
import {Morpheme} from '../morpheme/morpheme.entity';
import {Syllable} from '../syllable/syllable.entity';
@InputType()
export class WordInput {

  @Field()
  spelling: string;

  @Field()
  morphemes: Morpheme[];

  @Field()
  syllables: Syllable[];
}