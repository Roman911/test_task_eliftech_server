import { ObjectType, Field, Int } from '@nestjs/graphql'
import { CreateProductDto } from '../../products/dto/create-product.dto'

@ObjectType()
export class CreateUserDto {
  @Field()
  _id: string
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
  @Field(type => [CreateProductDto])
  products: CreateProductDto[]
  @Field()
  last_seen: Date
  @Field()
  createdAt: Date
}