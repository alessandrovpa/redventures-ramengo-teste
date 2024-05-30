import { Module } from '@nestjs/common';
import { BrothsModule } from './broths/broths.module';
import { OrdersModule } from './orders/orders.module';
import { ProteinsModule } from './proteins/proteins.module';
import { PersistenceModule } from './persistence/persistence.module';

@Module({
  imports: [PersistenceModule, BrothsModule, OrdersModule, ProteinsModule],
})
export class AppModule {}
