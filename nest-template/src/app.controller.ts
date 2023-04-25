import { Controller, Get } from '@nestjs/common';
import { InfoService } from './models/info/info.service';

@Controller()
export class AppController {
  constructor(private readonly userService: InfoService) { }

  @Get()
  getHello(): string {
    return this.userService.getInfo();
  }
}
