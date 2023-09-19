import { ApiProperty } from '@nestjs/swagger';

export class CreateGuestDto {
  @ApiProperty({
    description: 'Name of the guest',
    default: 'John Doe',
  })
  name: string;

  @ApiProperty({
    description: 'Age of the guest',
    default: 25,
  })
  age: number;
}
