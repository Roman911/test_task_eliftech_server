import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class CreateProductDto {
  @Field()
  _id: string
  @Field()
  name: string
  @Field()
  description: string
  @Field(() => Int)
  price: number
  @Field()
  shop: string
  @Field()
  img: string
  @Field({ nullable: true })
  last_seen: Date
  @Field()
  createdAt: Date
}