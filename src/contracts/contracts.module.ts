import { Module } from '@nestjs/common';
import { ContractsService } from './application/contracts.service';
import { ContractsController } from './infrastructure/contracts.controller';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [ContractsController],
  providers: [ContractsService, PrismaService],
})
export class ContractsModule {}
