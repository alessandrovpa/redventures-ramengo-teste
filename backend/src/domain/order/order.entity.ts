interface IOrderProps {
  id: string;
  description: string;
  image: string;
  brothId: string;
  proteinId: string;
  createdAt: number;
}

export interface IConstructorProps {
  id?: string;
  description: string;
  image: string;
  brothId: string;
  proteinId: string;
  createdAt?: number;
}

class OrderEntity {
  private props: IOrderProps;

  constructor(props: IConstructorProps) {
    this.props = {
      ...props,
      id: props.id ?? crypto.randomUUID(),
      createdAt: props.createdAt ?? new Date().getTime(),
    };
  }

  get id(): string {
    return this.props.id;
  }

  get image(): string {
    return this.props.image;
  }

  get description(): string {
    return this.props.description;
  }

  get brothId(): string {
    return this.props.brothId;
  }

  get proteinId(): string {
    return this.props.proteinId;
  }

  get createdAt(): number {
    return this.props.createdAt;
  }
}

export { OrderEntity };
