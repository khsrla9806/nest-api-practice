import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Validator 데코레이터가 없는 애들은 Validator에 접근조차 못하게 한다.
    forbidNonWhitelisted: true, // 정해진 틀에서 벗어난 이상한 요청은 애초에 막아버림
    transform: true // 입력을 받을 때 우리가 받기를 원하는 타입으로 바꿔서 받을 수 있게 해줌 (:id -> string -> number)
  }));
  await app.listen(3000);
}
bootstrap();
