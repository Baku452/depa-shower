import { ApiProperty } from '@nestjs/swagger';

export class CreateGiftDto {
  @ApiProperty({
    description: 'Name of the gift',
    default: 'Olla Arrocera',
  })
  name: string;

  @ApiProperty({
    description: 'If the gift is a cash',
    default: false,
  })
  isCash: boolean;

  @ApiProperty({
    description: 'Price of the gift',
    default: 1,
  })
  price: number;

  @ApiProperty({
    description: 'Id of the creator of the gift',
  })
  owner: string;
}
