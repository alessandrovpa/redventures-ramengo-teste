import { AppError } from '@/application/common/errors/app.error';
import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class GlobalExceptionHandler implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost) {
    let responseBody = {
      error: 'Ops... aconteceu algo inesperado, tente novamente mais tarde',
    };
    let httpStatus = 500;

    if (exception instanceof AppError) {
      responseBody = {
        error: exception.error,
      };
      httpStatus = exception.statusCode;
    }

    this.httpAdapterHost.httpAdapter.reply(
      host.switchToHttp().getResponse(),
      responseBody,
      httpStatus,
    );
  }
}
