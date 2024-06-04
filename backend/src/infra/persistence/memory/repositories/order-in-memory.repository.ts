import { OrderEntity, OrderRepository } from '@/domain/order';

class InMemoryOrderRepository implements OrderRepository {
  orders: OrderEntity[];

  constructor() {
    this.orders = [];
  }

  async save(order: OrderEntity): Promise<void> {
    this.orders.push(order);
  }

  async list(): Promise<OrderEntity[]> {
    return this.orders;
  }
}

export { InMemoryOrderRepository };
