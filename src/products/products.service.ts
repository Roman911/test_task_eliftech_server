import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { ModuleRef } from "@nestjs/core"
import { Product, ProductDocument } from './products.schema'
import { ProductInput } from './inputs/create-product.input'

@Injectable()
export class ProductService {
  constructor(
    private moduleRef: ModuleRef,
    @InjectModel(Product.name)
    private productModel: Model<ProductDocument>
  ) { }

  async product(productID: string): Promise<Product> {
    return this.productModel.findById(productID).exec()
  }

  async findAll(shop: string): Promise<Product[]> {
    return this.productModel.find({ shop }).exec()
  }

  async saveProduct(createProductDto: ProductInput): Promise<Product> {
    return await this.productModel.create(createProductDto)
  }
}