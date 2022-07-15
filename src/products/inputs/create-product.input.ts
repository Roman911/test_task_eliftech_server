import { InputType, Field, Int } from '@nestjs/graphql'

@InputType()
export class ProductInput {
  @Field()
  name: string
  @Field()
  description: string
<<<<<<< HEAD
  @Field()
  price: string
=======
  @Field((type) => Int)
  price: number
>>>>>>> 1d710545e8809184e17bf184432d3ea839d396e3
  @Field()
  shop: string
  @Field()
  img: string
}