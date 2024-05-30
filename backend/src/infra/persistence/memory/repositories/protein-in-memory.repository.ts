import { ProteinEntity, ProteinRepository } from '@/domain/protein';

class InMemoryProteinRepository implements ProteinRepository {
  proteins: ProteinEntity[];

  constructor() {
    const chasu = new ProteinEntity({
      description:
        'A sliced flavourful pork meat with a selection of season vegetables.',
      imageActive: 'https://tech.redventures.com.br/icons/pork/active.svg',
      imageInactive: 'https://tech.redventures.com.br/icons/pork/inactive.svg',
      name: 'Chasu',
      price: 10,
    });

    const yasai = new ProteinEntity({
      description:
        'A delicious vegetarian lamen with a selection of season vegetables.',
      imageActive: 'https://tech.redventures.com.br/icons/yasai/active.svg',
      imageInactive: 'https://tech.redventures.com.br/icons/yasai/inactive.svg',
      name: 'Yasai Vegetarian',
      price: 10,
    });

    const karaague = new ProteinEntity({
      description:
        'Three units of fried chicken, moyashi, ajitama egg and other vegetables.',
      imageActive: 'https://tech.redventures.com.br/icons/chicken/active.svg',
      imageInactive:
        'https://tech.redventures.com.br/icons/chicken/inactive.svg',
      name: 'Karaague',
      price: 12,
    });

    this.proteins = [chasu, yasai, karaague];
  }

  async list(): Promise<ProteinEntity[]> {
    return this.proteins;
  }

  async findById(id: string): Promise<ProteinEntity> {
    const protein = this.proteins.find((protein) => protein.id === id);

    return protein ?? null;
  }
}

export { InMemoryProteinRepository };
