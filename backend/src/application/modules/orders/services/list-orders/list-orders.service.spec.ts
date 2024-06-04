import { InMemoryOrderRepository } from '@/infra/persistence/memory/repositories';
import { ListOrdersService } from './list-orders.service';
import { OrderRepository } from '@/domain/order';

describe('ListOrdersService', () => {
  let listOrdersService: ListOrdersService;
  let orderRepository: OrderRepository;

  beforeEach(() => {
    orderRepository = new InMemoryOrderRepository();

    listOrdersService = new ListOrdersService(orderRepository);
  });

  it('should be able to list all orders', async () => {
    const orders = await listOrdersService.execute();

    expect(orders).toBeDefined();
  });
});
