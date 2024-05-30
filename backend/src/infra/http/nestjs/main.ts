import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { GlobalExceptionHandler, VerifyXApiKey } from './interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new VerifyXApiKey());
  app.useGlobalFilters(new GlobalExceptionHandler(app.get(HttpAdapterHost)));
  await app.listen(3000);
}
bootstrap();
