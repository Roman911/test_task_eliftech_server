import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class SearchInput {
  @Field()
  order: string
  @Field()
  email: string
  @Field()
  phone: string
}