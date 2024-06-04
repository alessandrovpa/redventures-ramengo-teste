import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { PersistenceModule } from '../persistence/persistence.module';
import { CreateOrderService } from '@/application/modules/orders/services/create-order/create-order.service';
import { BrothRepository } from '@/domain/broth';
import { OrderRepository } from '@/domain/order';
import { ProteinRepository } from '@/domain/protein';
import { ListOrdersService } from '@/application/modules/orders/services/list-orders/list-orders.service';

@Module({
  controllers: [OrdersController],
  imports: [PersistenceModule],
  providers: [
    {
      provide: CreateOrderService,
      useFactory: (
        orderRepository: OrderRepository,
        brothRepository: BrothRepository,
        proteinRepository: ProteinRepository,
      ) => {
        return new CreateOrderService(
          orderRepository,
          brothRepository,
          proteinRepository,
        );
      },
      inject: [OrderRepository, BrothRepository, ProteinRepository],
    },
    {
      provide: ListOrdersService,
      useFactory: (orderRepository: OrderRepository) => {
        return new ListOrdersService(orderRepository);
      },
      inject: [OrderRepository],
    },
  ],
})
export class OrdersModule {}
