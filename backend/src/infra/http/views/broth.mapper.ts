import { stringCapitalize } from '@/application/common/utils';
import { BrothEntity } from '@/domain/broth';

class BrothMapper {
  static toView(broth: BrothEntity) {
    return {
      id: broth.id,
      imageInactive: broth.imageInactive,
      imageActive: broth.imageActive,
      name: stringCapitalize(broth.name),
      description: broth.description,
      price: broth.price,
    };
  }
}

export { BrothMapper };
