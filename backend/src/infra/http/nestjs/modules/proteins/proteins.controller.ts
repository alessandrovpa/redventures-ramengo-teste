import { ListProteinsService } from '@/application/modules/proteins/services/list-proteins/list-proteins.service';
import { ProteinMapper } from '@/infra/http/views';
import { Controller, Get } from '@nestjs/common';

@Controller('proteins')
class ProteinsController {
  constructor(private readonly listProteinsService: ListProteinsService) {}
  @Get()
  async listProteins() {
    const proteins = await this.listProteinsService.execute();
    const formattedProteins = proteins.map((protein) =>
      ProteinMapper.toView(protein),
    );
    return { proteins: formattedProteins };
  }
}

export { ProteinsController };
