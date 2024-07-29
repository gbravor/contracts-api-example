import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ContractRequest {
  @ApiProperty({ example: 'Kerry King' })
  @IsString()
  @IsNotEmpty()
  clientName: string;
  @ApiProperty({ example: 'example@test.com' })
  @IsString()
  @IsNotEmpty()
  email: string;
  initialDate: string;
  @ApiProperty({ example: '00-0233-433' })
  accountNumber: string;
  @IsNumber()
  @ApiProperty({ example: '123330' })
  amount: number;
  @ApiProperty({ example: 'USD' })
  currency: string;
}
