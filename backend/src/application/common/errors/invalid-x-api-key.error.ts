import { AppError } from './app.error';

class InvalidXApiKeyError extends AppError {
  constructor() {
    super({
      error: 'invalid x-api-key',
      statusCode: 403,
    });
  }
}

export { InvalidXApiKeyError };
