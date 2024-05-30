import { BrothEntity, BrothRepository } from '@/domain/broth';

class InMemoryBrothRepository implements BrothRepository {
  broths: BrothEntity[];

  constructor() {
    const salt = new BrothEntity({
      description: 'Simple like the seawater, nothing more',
      imageActive: 'https://tech.redventures.com.br/icons/salt/active.svg',
      imageInactive: 'https://tech.redventures.com.br/icons/salt/inactive.svg',
      name: 'Salt',
      price: 10,
    });

    const shoyu = new BrothEntity({
      description: 'The good old and traditional soy sauce',
      imageActive: 'https://tech.redventures.com.br/icons/shoyu/active.svg',
      imageInactive: 'https://tech.redventures.com.br/icons/shoyu/inactive.svg',
      name: 'Shoyu',
      price: 10,
    });

    const miso = new BrothEntity({
      description: 'Paste made of fermented soybeans',
      imageActive: 'https://tech.redventures.com.br/icons/miso/active.svg',
      imageInactive: 'https://tech.redventures.com.br/icons/miso/inactive.svg',
      name: 'Miso',
      price: 12,
    });

    this.broths = [salt, shoyu, miso];
  }

  async list(): Promise<BrothEntity[]> {
    return this.broths;
  }

  async findById(id: string): Promise<BrothEntity> {
    const broth = this.broths.find((broth) => broth.id === id);

    return broth ?? null;
  }
}

export { InMemoryBrothRepository };
