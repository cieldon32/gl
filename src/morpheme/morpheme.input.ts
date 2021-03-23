import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class MorphemeInput {

  @Field()
  prefix: string;

  @Field()
  root: string;

  @Field()
  suffix: string;
}