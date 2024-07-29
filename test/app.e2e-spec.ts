import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { ContractRequest } from '../src/contracts/application/ContractRequest.dto';
import { ContractsService } from '../src/contracts/application/contracts.service';
import { PrismaService } from '../src/prisma.service';

describe('App (e2e)', () => {
  let app: INestApplication;
  let contractsService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    contractsService = moduleFixture.get(ContractsService);
    prisma = moduleFixture.get(PrismaService);

    await app.init();
  });

  afterAll(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "Contract" RESTART IDENTITY CASCADE;`;
  });

  describe('Contracts', () => {
    it('should create contract (POST)', async () => {
      const contract = await contractsService.create(payload);

      expect(contract.clientName).toBe(payload.clientName);
      expect(contract.currency).toBe(payload.currency);
    });
  });

  it('should get contracts (GET)', () => {
    return request(app.getHttpServer())
      .get('/contractList')
      .expect(200)
      .expect([{ id: 1, ...payload }]);
  });
});

const payload: ContractRequest = {
  clientName: 'Joe',
  email: 'joe@gmail.com',
  initialDate: '07-19-2024',
  accountNumber: '439040',
  amount: 2000,
  currency: 'USD',
};
