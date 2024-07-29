import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ContractsService } from '../application/contracts.service';
import { ContractRequest } from '../application/ContractRequest.dto';
import { ApiExtraModels, ApiOperation } from '@nestjs/swagger';
import { Contract } from '../application/Contract.dto';
import { Error } from '../application/Error.dto';

@ApiExtraModels(Contract, Error)
@Controller()
export class ContractsController {
  constructor(private readonly contractsServices: ContractsService) {}

  @Get('contractList')
  @ApiOperation({
    summary: 'Get contract by filters',
    description: 'Get contract by filters',
    operationId: 'getContracts',
  })
  async contractList(
    @Query('accountNumber') accountNumber: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ): Promise<Contract[]> {
    return await this.contractsServices.findAll({
      accountNumber,
      startDate,
      endDate,
    });
  }

  @Post('contract')
  @ApiOperation({
    summary: 'Create contract',
    description: 'Create contract',
    operationId: 'createContract',
  })
  async createContact(
    @Body()
    body: ContractRequest,
  ): Promise<Contract> {
    return this.contractsServices.create(body);
  }
}
