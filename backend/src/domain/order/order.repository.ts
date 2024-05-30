import { OrderEntity } from './order.entity';

export abstract class OrderRepository {
  abstract save(order: OrderEntity): Promise<void>;
}
