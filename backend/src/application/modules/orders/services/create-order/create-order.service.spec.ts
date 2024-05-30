import {
  InMemoryBrothRepository,
  InMemoryOrderRepository,
  InMemoryProteinRepository,
} from '@/infra/persistence/memory/repositories';
import { CreateOrderService } from './create-order.service';
import { OrderRepository } from '@/domain/order';
import { ProteinRepository } from '@/domain/protein';
import { BrothRepository } from '@/domain/broth';
import {
  BrothNotFoundError,
  MissingBrothIdError,
  MissingProteinIdError,
  ProteinNotFoundError,
} from '../../errors';

describe('CreateOrderService', () => {
  let createOrderService: CreateOrderService;
  let orderRepository: OrderRepository;
  let proteinRepository: ProteinRepository;
  let brothRepository: BrothRepository;

  beforeEach(() => {
    orderRepository = new InMemoryOrderRepository();
    proteinRepository = new InMemoryProteinRepository();
    brothRepository = new InMemoryBrothRepository();

    createOrderService = new CreateOrderService(
      orderRepository,
      brothRepository,
      proteinRepository,
    );
  });

  it('should be able to create an new order', async () => {
    const protein = await proteinRepository.list();
    const broth = await brothRepository.list();

    const order = await createOrderService.execute({
      brothId: broth[0].id,
      proteinId: protein[0].id,
    });

    expect(order).toBeDefined();
    expect(order.id).toBeDefined();
  });

  it('should not be able to crean na new order withou an protenId', async () => {
    const broth = await brothRepository.list();

    expect(
      async () =>
        await createOrderService.execute({
          brothId: broth[0].id,
          proteinId: null,
        }),
    ).rejects.toBeInstanceOf(MissingProteinIdError);
  });

  it('should not be able to crean na new order withou an brothId', async () => {
    const protein = await proteinRepository.list();

    expect(
      async () =>
        await createOrderService.execute({
          brothId: null,
          proteinId: protein[0].id,
        }),
    ).rejects.toBeInstanceOf(MissingBrothIdError);
  });

  it('should not be able to crean na new order with an inexistent broth', async () => {
    const protein = await proteinRepository.list();

    expect(
      async () =>
        await createOrderService.execute({
          brothId: '1',
          proteinId: protein[0].id,
        }),
    ).rejects.toBeInstanceOf(BrothNotFoundError);
  });

  it('should not be able to crean na new order with an inexistent protein', async () => {
    const broth = await brothRepository.list();

    expect(
      async () =>
        await createOrderService.execute({
          brothId: broth[0].id,
          proteinId: '1',
        }),
    ).rejects.toBeInstanceOf(ProteinNotFoundError);
  });
});
