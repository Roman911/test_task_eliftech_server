import { InputType, Field, Int } from '@nestjs/graphql'

@InputType()
export class ProductInput {
  @Field()
  name: string
  @Field()
  description: string
  @Field((type) => Int)
  price: number
  @Field()
  shop: string
  @Field()
  img: string
}