import { BrothRepository } from '@/domain/broth';
import { ListBrothsService } from './list-broths.service';
import { InMemoryBrothRepository } from '@/infra/persistence/memory/repositories';

describe('ListBrothsService', () => {
  let listBrothsService: ListBrothsService;
  let brothRepository: BrothRepository;

  beforeEach(() => {
    brothRepository = new InMemoryBrothRepository();

    listBrothsService = new ListBrothsService(brothRepository);
  });

  it('should be able to list all broths', async () => {
    const broths = await listBrothsService.execute();

    expect(broths).toBeDefined();
    expect(broths).toHaveLength(3);
  });
});
