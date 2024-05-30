import { AppError } from '@/application/common/errors/app.error';

class BrothNotFoundError extends AppError {
  constructor() {
    super({
      error: 'broth not found',
      statusCode: 400,
    });
  }
}

export { BrothNotFoundError };
