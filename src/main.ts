import { NestFactory, Reflector } from '@nestjs/core';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import * as morgan from 'morgan';
import { AppModule } from './app.module';
import { CORS } from './constants/cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { snapshot: true });

  app.use(morgan('dev'));

  app.useGlobalPipes(
    new ValidationPipe({
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  ); //con este global pipe puedo utilizar los dto a traves del ValidationPipe

  const reflector = app.get(Reflector); //creo el reflector para evitar mostrar ciertos datos

  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector)); //uso el reflector en el interceptor

  app.enableCors(CORS);

  app.setGlobalPrefix('api/v1');

  await app.listen(+process.env.PORT || 3001);

  console.log(`Api running on: ${await app.getUrl()}`);
}
bootstrap();
