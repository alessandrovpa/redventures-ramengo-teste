import { OrderEntity } from '@/domain/order';

class OrderMapper {
  static toView(order: OrderEntity) {
    return {
      id: order.id,
      image: order.image,
      description: order.description,
    };
  }
}

export { OrderMapper };
