import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { ModuleRef } from "@nestjs/core"
import { User, UserDocument } from './users.schema'
import { UserInput } from './inputs/create-user.input'

@Injectable()
export class UserService {
  constructor(
    private moduleRef: ModuleRef,
    @InjectModel(User.name)
    private userModel: Model<UserDocument>
  ) { }

  async findAll(search: string): Promise<User[]> {
    const user = await this.userModel.find({ name: search }).populate('products').exec()
    if (user.length !== 0) return user

    return this.userModel.find({ phone: search }).exec()
  }

  async saveUser(createUserDto: UserInput): Promise<User> {
    return await this.userModel.create(createUserDto)
  }
}