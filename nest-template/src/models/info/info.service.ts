import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class InfoService {
  constructor(private readonly configService: ConfigService) {}

  getInfo(): string {
    return `runing in http://localhost:${this.configService.get('port')}`;
  }
}
