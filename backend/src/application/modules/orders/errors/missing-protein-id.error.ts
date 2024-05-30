import { AppError } from '@/application/common/errors/app.error';

class MissingProteinIdError extends AppError {
  constructor() {
    super({
      error: 'proteinId is required',
      statusCode: 400,
    });
  }
}

export { MissingProteinIdError };
