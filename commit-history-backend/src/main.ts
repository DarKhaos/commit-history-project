import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Git Commit History')
    .setDescription('App that shows git commit history on the same project you are working on')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  app.enableCors();
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
