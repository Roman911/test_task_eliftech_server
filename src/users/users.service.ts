import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { ModuleRef } from "@nestjs/core"
import { User, UserDocument } from './users.schema'
import { UserInput } from './inputs/create-user.input'
import { SearchInput } from './inputs/search-user.input'

@Injectable()
export class UserService {
  constructor(
    private moduleRef: ModuleRef,
    @InjectModel(User.name)
    private userModel: Model<UserDocument>
  ) { }

  async findAll(createUserDto: SearchInput): Promise<User[]> {
    const { order, email, phone } = createUserDto

    if (order.length !== 0) {
      return await this.userModel.find({ _id: order }).populate('products').exec()
    } else if (email.length !== 0) {
      return await this.userModel.find({ email }).populate('products').exec()
    } else if (phone.length !== 0) {
      return await this.userModel.find({ phone }).populate('products').exec()
    }
  }

  async saveUser(createUserDto: UserInput): Promise<User> {
    return await this.userModel.create(createUserDto)
  }
}