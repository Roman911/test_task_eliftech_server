import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"

const start = async () => {
  try {
    const app = await NestFactory.create(AppModule, { cors: true })

    await app.listen(process.env.PORT || 3005, () => console.log(`server started on PORT ${process.env.PORT || 3005}`))
  } catch (e) {
    console.log(e)
  }
}

start()
