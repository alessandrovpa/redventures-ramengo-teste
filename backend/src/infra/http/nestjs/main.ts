import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { GlobalExceptionHandler } from './modules/interceptors/global-error-handler';
import { VerifyXApiKey } from './modules/interceptors/verify-x-api-key.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new VerifyXApiKey());
  app.useGlobalFilters(new GlobalExceptionHandler(app.get(HttpAdapterHost)));
  await app.listen(3000);
}
bootstrap();
