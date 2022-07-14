import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { Args, Resolver, Query, Mutation } from '@nestjs/graphql'
import { ProductService } from './products.service'
import { CreateProductDto } from './dto/create-product.dto'
import { Product, ProductDocument } from "./products.schema"
import { ProductInput } from './inputs/create-product.input'

@Resolver()
export class ProductsResolver {
  constructor(
    private productsService: ProductService,
    @InjectModel(Product.name)
    private productsModel: Model<ProductDocument>
  ) { }

  @Query(() => CreateProductDto)
  async product(@Args('productID') productID: string) {
    return this.productsService.product(productID)
  }

  @Mutation(() => CreateProductDto)
  async createProduct(@Args('input') input: ProductInput) {
    return this.productsService.saveProduct(input)
  }
}