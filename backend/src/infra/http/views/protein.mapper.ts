import { stringCapitalize } from '@/application/common/utils';
import { ProteinEntity } from '@/domain/protein';

class ProteinMapper {
  static toView(protein: ProteinEntity) {
    return {
      id: protein.id,
      imageInactive: protein.imageInactive,
      imageActive: protein.imageActive,
      name: stringCapitalize(protein.name),
      description: protein.description,
      price: protein.price,
    };
  }
}

export { ProteinMapper };
