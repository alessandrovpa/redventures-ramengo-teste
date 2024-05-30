import { ListBrothsService } from '@/application/modules/broths/services/list-broths/list-broths.service';
import { BrothMapper } from '@/infra/http/views';
import { Controller, Get } from '@nestjs/common';

@Controller('broths')
class BrothsController {
  constructor(private readonly listBrothService: ListBrothsService) {}
  @Get()
  async listBroths(): Promise<any> {
    const broths = await this.listBrothService.execute();
    const formattedBroths = broths.map((broth) => BrothMapper.toView(broth));
    return { broths: formattedBroths };
  }
}

export { BrothsController };
