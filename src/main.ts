import { NestFactory } from '@nestjs/core';
import { RethinkModule } from 'rethink/rethink.module';

async function bootstrap() {
  const app = await NestFactory.create(RethinkModule);
  await app.listen(3000);
}
bootstrap();
