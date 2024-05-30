import { CreateOrderService } from '@/application/modules/orders/services/create-order/create-order.service';
import { OrderMapper } from '@/infra/http/views';
import { Body, Controller, Post } from '@nestjs/common';

interface CreateOrderDTO {
  brothId: string;
  proteinId: string;
}

@Controller('orders')
class OrdersController {
  constructor(private readonly createOrderService: CreateOrderService) {}
  @Post()
  async createOrder(@Body() createOrder: CreateOrderDTO) {
    const order = await this.createOrderService.execute(createOrder);
    const formattedOrder = OrderMapper.toView(order);
    return formattedOrder;
  }
}

export { OrdersController };
