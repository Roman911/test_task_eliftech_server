import { InputType, Field } from '@nestjs/graphql'
import { ProductInput } from '../../products/inputs/create-product.input'

@InputType()
export class UserInput {
  @Field()
  address: string
  @Field()
  email: string
  @Field()
  phone: string
  @Field()
  name: string
  @Field()
  totalPrice: string
  @Field(type => [String])
  products: string[]
}