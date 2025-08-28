import { Injectable } from '@nestjs/common';
import { UserRole } from '@shared/types';

@Injectable()
export class AppService {
  getHello(): string {
    const role: UserRole = 'ADMIN';
    return `Hello ${role} from NestJS`;
  }
}
