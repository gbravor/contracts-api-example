import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { ContractRequest } from './ContractRequest.dto';
import { Contract } from './Contract.dto';

@Injectable()
export class ContractsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(data: any): Promise<Contract[]> {
    return this.prisma.contract.findMany({
      where: {
        accountNumber: data.accountNumber,
      },
    });
  }

  async create(data: ContractRequest): Promise<Contract> {
    return this.prisma.contract.create({ data });
  }
}
