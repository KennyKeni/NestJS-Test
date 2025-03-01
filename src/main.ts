import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http-exception/http-exception.filter';
import { ApiKeyGuard } from './common/guards/api-key/api-key.guard';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    new FastifyAdapter(),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true, 
      transformOptions: {
        enableImplicitConversion: true,
      }
    })
  )
  app.useGlobalFilters(
    new HttpExceptionFilter(),
  )
  app.useGlobalGuards(
    new ApiKeyGuard(),
  )
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
