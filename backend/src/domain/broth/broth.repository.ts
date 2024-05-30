import { BrothEntity } from './broth.entity';

export abstract class BrothRepository {
  abstract list(): Promise<BrothEntity[]>;
  abstract findById(id: string): Promise<BrothEntity | null>;
}
