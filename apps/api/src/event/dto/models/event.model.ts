import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Event {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  media: string;
}
