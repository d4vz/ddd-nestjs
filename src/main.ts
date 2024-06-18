import { AutoMapperLogger } from '@automapper/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './cross-cutting/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.listen(3000).then(() => {
    Logger.log('Server started on http://localhost:3000', 'Bootstrap');
  });
}

AutoMapperLogger.configure({
  error: (msg) => Logger.error(msg, 'AutoMapper'),
  warn: (msg) => Logger.warn(msg, 'AutoMapper'),
  log: (msg) => Logger.log(msg, 'AutoMapper'),
  info: (msg) => Logger.log(msg, 'AutoMapper'),
});

bootstrap();
