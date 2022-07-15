import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export class CreateProductDto {
  @Field()
  _id: string
  @Field()
  name: string
  @Field()
  description: string
<<<<<<< HEAD
  @Field()
  price: string
=======
  @Field(() => Int)
  price: number
>>>>>>> 1d710545e8809184e17bf184432d3ea839d396e3
  @Field()
  shop: string
  @Field()
  img: string
  @Field({ nullable: true })
  last_seen: Date
  @Field()
  createdAt: Date
}