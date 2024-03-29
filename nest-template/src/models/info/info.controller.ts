import { Controller, Get } from '@nestjs/common';
import { InfoService } from './info.service';

@Controller('/info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Get()
  getHello() {
    return this.infoService.getInfo();
  }
}
