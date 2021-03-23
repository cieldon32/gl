import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class PhonemeInput {

  @Field()
  symbol: string;

  @Field()
  grapheme: string;

}