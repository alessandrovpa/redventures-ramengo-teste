import { BrothRepository } from '@/domain/broth';
import { OrderEntity, OrderRepository } from '@/domain/order';
import { ProteinRepository } from '@/domain/protein';
import {
  BrothNotFoundError,
  MissingBrothIdError,
  MissingProteinIdError,
  ProteinNotFoundError,
} from '../../errors';
import { stringCapitalize } from '@/application/common/utils';
import { getIdFromRVApi } from '@/application/common/utils/get-id-from-rv-api';

interface Request {
  brothId: string;
  proteinId: string;
}

const orderImages = {
  'Yasai Vegetarian':
    'https://tech.redventures.com.br/icons/ramen/ramenYasai Vegetarian.png',
  Karaague: 'https://tech.redventures.com.br/icons/ramen/ramenKaraague.png',
  Chasu: 'https://tech.redventures.com.br/icons/ramen/ramenChasu.png',
};

class CreateOrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly brothRepository: BrothRepository,
    private readonly proteinRepository: ProteinRepository,
  ) {}

  async execute({ brothId, proteinId }: Request): Promise<OrderEntity> {
    if (!brothId) throw new MissingBrothIdError();
    if (!proteinId) throw new MissingProteinIdError();

    const broth = await this.brothRepository.findById(brothId);
    if (!broth) throw new BrothNotFoundError();

    const protein = await this.proteinRepository.findById(proteinId);
    if (!protein) throw new ProteinNotFoundError();

    const description = `${stringCapitalize(broth.name)} and ${stringCapitalize(protein.name)} Ramen`;

    const orderId = await getIdFromRVApi();

    const order = new OrderEntity({
      id: orderId,
      brothId,
      description,
      image: orderImages[protein.name],
      proteinId,
    });

    await this.orderRepository.save(order);

    return order;
  }
}

export { CreateOrderService };
