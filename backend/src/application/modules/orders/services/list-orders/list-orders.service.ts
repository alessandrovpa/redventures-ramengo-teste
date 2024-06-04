import { OrderEntity, OrderRepository } from '@/domain/order';

class ListOrdersService {
  constructor(private readonly orderRepository: OrderRepository) {}

  async execute(): Promise<OrderEntity[]> {
    const orders = await this.orderRepository.list();
    return orders;
  }
}

export { ListOrdersService };
