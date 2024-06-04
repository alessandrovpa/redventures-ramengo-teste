import 'dotenv/config';
import {
  InvalidXApiKeyError,
  MissingXApiKeyError,
} from '@/application/common/errors';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class VerifyXApiKey implements NestInterceptor {
  constructor() {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Promise<Observable<any>> {
    const request: Request = context.switchToHttp().getRequest();

    if (!request.headers['x-api-key']) throw new MissingXApiKeyError();
    if (request.headers['x-api-key'] !== process.env.X_API_KEY)
      throw new InvalidXApiKeyError();

    return next.handle().pipe();
  }
}
