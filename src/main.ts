import { NestFactory } from '@nestjs/core';
import 'dotenv/config';
import { AppModule } from './app.module';
import * as mongoose from 'mongoose';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const DB_USER = process.env.DB_USER;
  const DB_PASSWORD = process.env.DB_PASSWORD;

  await mongoose
    .connect(`mongodb://${DB_USER}:${DB_PASSWORD}@mongo:27017`, {})
    .then(() => {
      console.log('Database connected');
    })
    .catch((err) => {
      console.log('Database connection failed', err);
    });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
