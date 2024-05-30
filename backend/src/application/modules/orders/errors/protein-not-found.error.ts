import { AppError } from '@/application/common/errors/app.error';

class ProteinNotFoundError extends AppError {
  constructor() {
    super({
      error: 'protein not found',
      statusCode: 400,
    });
  }
}

export { ProteinNotFoundError };
