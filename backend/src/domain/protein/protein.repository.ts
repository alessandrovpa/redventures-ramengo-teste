import { ProteinEntity } from './protein.entity';

export abstract class ProteinRepository {
  abstract list(): Promise<ProteinEntity[]>;
  abstract findById(id: string): Promise<ProteinEntity | null>;
}
