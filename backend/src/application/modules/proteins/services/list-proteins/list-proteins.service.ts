import { ProteinEntity, ProteinRepository } from '@/domain/protein';

class ListProteinsService {
  constructor(private readonly proteinRepository: ProteinRepository) {}

  async execute(): Promise<ProteinEntity[]> {
    const proteins = await this.proteinRepository.list();
    return proteins;
  }
}

export { ListProteinsService };
