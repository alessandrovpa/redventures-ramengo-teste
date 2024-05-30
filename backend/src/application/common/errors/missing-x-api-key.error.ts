import { AppError } from './app.error';

class MissingXApiKeyError extends AppError {
  constructor() {
    super({
      error: 'x-api-key header missing',
      statusCode: 403,
    });
  }
}

export { MissingXApiKeyError };
