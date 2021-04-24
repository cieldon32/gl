import { Field, InputType } from '@nestjs/graphql';
import {Morpheme} from 'src/morpheme';
import {Syllable} from 'src/syllable';
@InputType()
export class WordInput {

  @Field()
  spelling: string;

  @Field()
  morphemes: Morpheme[];

  @Field()
  syllables: Syllable[];
}