import { BrothRepository } from '@/domain/broth';
import { OrderRepository } from '@/domain/order';
import { ProteinRepository } from '@/domain/protein';
import {
  InMemoryBrothRepository,
  InMemoryOrderRepository,
  InMemoryProteinRepository,
} from '@/infra/persistence/memory/repositories';
import { Module } from '@nestjs/common';

@Module({
  providers: [
    {
      provide: BrothRepository,
      useClass: InMemoryBrothRepository,
    },
    {
      provide: ProteinRepository,
      useClass: InMemoryProteinRepository,
    },
    {
      provide: OrderRepository,
      useClass: InMemoryOrderRepository,
    },
  ],
  exports: [BrothRepository, ProteinRepository, OrderRepository],
})
export class PersistenceModule {}
