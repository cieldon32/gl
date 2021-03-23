import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class SyllableInput {

  @Field()
  onset: string;

  @Field()
  rhyme: string;

}