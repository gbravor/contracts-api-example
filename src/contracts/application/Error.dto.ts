import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class Error {
  @ApiProperty()
  @IsString()
  message: string;
}
