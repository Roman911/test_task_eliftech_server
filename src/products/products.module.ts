import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ProductsResolver } from './product.resolver'
import { Product, ProductSchema } from './products.schema'
import { ProductService } from './products.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])
  ],
  providers: [ProductsResolver, ProductService]
})
export class ProductsModule { }