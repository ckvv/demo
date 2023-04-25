import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(id?: number): string {
    return `user :${id}`;
  }
}
