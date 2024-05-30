import { BrothEntity, BrothRepository } from '@/domain/broth';

class ListBrothsService {
  constructor(private readonly brothRepository: BrothRepository) {}

  async execute(): Promise<BrothEntity[]> {
    const broths = await this.brothRepository.list();
    return broths;
  }
}

export { ListBrothsService };
