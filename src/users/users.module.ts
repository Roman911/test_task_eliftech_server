import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UserResolver } from './user.resolver'
import { User, UserSchema } from './users.schema'
import { UserService } from './users.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  providers: [UserResolver, UserService]
})
export class UsersModule { }