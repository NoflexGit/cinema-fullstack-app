import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field()
  id: string;

  @Field({ nullable: true })
  name: string;
}
