interface IConstructorProps {
  error: string;
  statusCode?: number;
}

interface IErrorProps {
  error: string;
  statusCode: number;
  date: number;
}

class AppError {
  private props: IErrorProps;
  constructor(props: IConstructorProps) {
    this.props = {
      ...props,
      statusCode: props.statusCode ?? 400,
      date: new Date().getTime(),
    };
  }

  get statusCode(): number {
    return this.props.statusCode;
  }

  get error(): string {
    return this.props.error;
  }

  get date(): number {
    return this.props.date;
  }
}

export { AppError };
