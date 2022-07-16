import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { Args, Resolver, Query, Mutation } from '@nestjs/graphql'
import { UserService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { User, UserDocument } from "./users.schema"
import { UserInput } from './inputs/create-user.input'
import { SearchInput } from './inputs/search-user.input'

@Resolver()
export class UserResolver {
  constructor(
    private userService: UserService,
    @InjectModel(User.name)
    private usersModel: Model<UserDocument>
  ) { }

  @Query(() => [CreateUserDto])
  async users(@Args('input') input: SearchInput) {
    return this.userService.findAll(input)
  }

  @Mutation(() => CreateUserDto)
  async createUser(@Args('input') input: UserInput) {
    return this.userService.saveUser(input)
  }
}