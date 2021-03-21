import { Field, InputType } from '@nestjs/graphql';


@InputType()
export class WordInput {

  @Field()
  spelling: string;

}