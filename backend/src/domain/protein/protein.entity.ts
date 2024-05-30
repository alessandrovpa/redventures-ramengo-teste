interface IProteinProps {
  id: string;
  imageInactive: string;
  imageActive: string;
  name: string;
  description: string;
  price: number;
  createdAt: number;
}

interface IConstructorProps {
  id?: string;
  imageInactive: string;
  imageActive: string;
  name: string;
  description: string;
  price: number;
  createdAt?: number;
}

class ProteinEntity {
  private props: IProteinProps;

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

  get imageInactive(): string {
    return this.props.imageInactive;
  }

  get imageActive(): string {
    return this.props.imageActive;
  }

  get name(): string {
    return this.props.name;
  }

  get description(): string {
    return this.props.description;
  }

  get price(): number {
    return this.props.price;
  }
}

export { ProteinEntity };
