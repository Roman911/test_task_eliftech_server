import { InputType, Field, Int } from '@nestjs/graphql'

@InputType()
export class ProductInput {
  @Field()
  name: string
  @Field()
  description: string
  @Field()
  price: string
  @Field()
  shop: string
  @Field()
  img: string
}