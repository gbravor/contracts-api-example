import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class Contract {
  @ApiProperty({ format: 'int64' })
  id: number;
  @ApiProperty({ example: 'Kerry King' })
  @IsString()
  clientName: string;
  @ApiProperty({ example: 'example@test.com' })
  @IsString()
  email: string;
  @ApiProperty({ example: 'date' })
  @IsString()
  initialDate: string;
  @ApiProperty({ example: '00-0233-433' })
  accountNumber: string;
  @IsNumber()
  @ApiProperty({ example: '123330' })
  amount: number;
  @ApiProperty({ example: 'USD' })
  currency: string;
}
