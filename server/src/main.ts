import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';

import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get<ConfigService>(ConfigService);

  const port = config.getOrThrow<number>('PORT');

  await app.listen(port, () =>
    Logger.log(
      `Application started on https://localhost:${port}`,
      'MainApplication',
    ),
  );
}

bootstrap();
