import { AppError } from '@/application/common/errors/app.error';

class MissingBrothIdError extends AppError {
  constructor() {
    super({
      error: 'brothId is required',
      statusCode: 400,
    });
  }
}

export { MissingBrothIdError };
