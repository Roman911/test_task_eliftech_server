import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { ProductSchema, Product } from '../products/products.schema'

export type UserDocument = User & mongoose.Document

@Schema()
export class User {
  @Prop()
  address: string
  @Prop()
  email: string
  @Prop()
  phone: string
  @Prop()
  name: string
  @Prop()
  totalPrice: string
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }])
  products: Product[]
  @Prop({ default: new Date })
  last_seen: Date
  @Prop({ default: new Date })
  createdAt: Date
}

export const UserSchema = SchemaFactory.createForClass(User)