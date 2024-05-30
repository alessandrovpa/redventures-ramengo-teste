import { InMemoryProteinRepository } from '@/infra/persistence/memory/repositories';
import { ListProteinsService } from './list-proteins.service';
import { ProteinRepository } from '@/domain/protein';

describe('ListProteinssService', () => {
  let listProteinsService: ListProteinsService;
  let proteinRepository: ProteinRepository;

  beforeEach(() => {
    proteinRepository = new InMemoryProteinRepository();

    listProteinsService = new ListProteinsService(proteinRepository);
  });

  it('should be able to list all proteins', async () => {
    const proteins = await listProteinsService.execute();

    expect(proteins).toBeDefined();
    expect(proteins).toHaveLength(3);
  });
});
