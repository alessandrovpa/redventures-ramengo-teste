import { CreateOrderService } from '@/application/modules/orders/services/create-order/create-order.service';
import { ListOrdersService } from '@/application/modules/orders/services/list-orders/list-orders.service';
import { OrderMapper } from '@/infra/http/views';
import { Body, Controller, Get, Post } from '@nestjs/common';

interface CreateOrderDTO {
  brothId: string;
  proteinId: string;
}

@Controller('orders')
class OrdersController {
  constructor(
    private readonly createOrderService: CreateOrderService,
    private readonly listOrdersService: ListOrdersService,
  ) {}
  @Post()
  async createOrder(@Body() createOrder: CreateOrderDTO) {
    const order = await this.createOrderService.execute(createOrder);
    const formattedOrder = OrderMapper.toView(order);
    return formattedOrder;
  }

  @Get()
  async listOrders() {
    const orders = await this.listOrdersService.execute();
    const formattedOrders = orders.map((order) => OrderMapper.toView(order));
    return { orders: formattedOrders };
  }
}

export { OrdersController };
