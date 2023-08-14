import { NestFactory, Reflector } from '@nestjs/core';
import * as morgan from 'morgan';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { snapshot: true });

  app.use(morgan('dev'));

  const reflector = app.get(Reflector); //creo el reflector para evitar mostrar ciertos datos

  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector)); //uso el reflector en el interceptor

  app.setGlobalPrefix('api/v1');

  await app.listen(+process.env.PORT || 3001);

  console.log(`Api running on: ${await app.getUrl()}`);
}
bootstrap();
