interface IBrothProps {
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

class BrothEntity {
  private props: IBrothProps;

  constructor(props: IConstructorProps) {
    this.props = {
      ...props,
      id: props.id ?? crypto.randomUUID(),
      createdAt: props.createdAt ?? new Date().getTime(),
    };
  }

  get(): IBrothProps {
    return this.props;
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

  get createdAt(): number {
    return this.props.createdAt;
  }
}

export { BrothEntity };
