import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { snapshot: true });

  app.setGlobalPrefix('api/v1');

  await app.listen(+process.env.PORT || 3001);

  console.log(`Api running on: ${await app.getUrl()}`);
}
bootstrap();
