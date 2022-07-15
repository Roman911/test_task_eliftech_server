import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'

export type ProductDocument = Product & mongoose.Document

@Schema()
export class Product {
  @Prop()
  name: string
  @Prop()
  description: string
  @Prop()
  price: string
  @Prop()
  shop: string
  @Prop()
  img: string
  @Prop({ default: new Date })
  last_seen: Date
  @Prop({ default: new Date })
  createdAt: Date
}

export const ProductSchema = SchemaFactory.createForClass(Product)