import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from "@nestjs/common"
import { GraphQLModule } from '@nestjs/graphql'
import { MongooseModule } from '@nestjs/mongoose'
//import { ServeStaticModule } from '@nestjs/serve-static'
//import { join } from 'path'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProductsModule } from './products/products.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    ProductsModule,
    UsersModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({ driver: ApolloDriver, autoSchemaFile: 'schema.gql' }),
    MongooseModule.forRoot(`mongodb+srv://Roman:${process.env.MONGO_DB_KEY}@cluster0-vogsm.mongodb.net/eliftech?retryWrites=true&w=majority`),
    //ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'uploads') })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }