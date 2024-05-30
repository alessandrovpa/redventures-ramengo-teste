import { Module } from '@nestjs/common';
import { BrothsController } from './broths.controller';
import { ListBrothsService } from '@/application/modules/broths/services/list-broths/list-broths.service';
import { BrothRepository } from '@/domain/broth';
import { PersistenceModule } from '../persistence/persistence.module';

@Module({
  controllers: [BrothsController],
  imports: [PersistenceModule],
  providers: [
    {
      provide: ListBrothsService,
      useFactory: (brothRepository: BrothRepository) => {
        return new ListBrothsService(brothRepository);
      },
      inject: [BrothRepository],
    },
  ],
})
export class BrothsModule {}
