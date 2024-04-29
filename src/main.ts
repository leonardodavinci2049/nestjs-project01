import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.main/app.module';
import { ValidationPipe } from '@nestjs/common';
import { LogInterceptor } from './core/interceptors/log.interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LogInterceptor());

  await app.listen(3000);

  if (1 != 1) {
    console.log('This never happens');
  }
}

bootstrap();
