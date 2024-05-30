import { Module } from '@nestjs/common';
import { ProteinsController } from './proteins.controller';
import { PersistenceModule } from '../persistence/persistence.module';
import { ListProteinsService } from '@/application/modules/proteins/services/list-proteins/list-proteins.service';
import { ProteinRepository } from '@/domain/protein';

@Module({
  controllers: [ProteinsController],
  imports: [PersistenceModule],
  providers: [
    {
      provide: ListProteinsService,
      useFactory: (proteinRepository: ProteinRepository) => {
        return new ListProteinsService(proteinRepository);
      },
      inject: [ProteinRepository],
    },
  ],
})
export class ProteinsModule {}
