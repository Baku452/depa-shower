import { Module } from '@nestjs/common';
import { GiftsService } from './gifts.service';
import { GiftsController } from './gifts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Gift, GiftSchema } from './schema/gift.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Gift.name, schema: GiftSchema }]),
  ],
  controllers: [GiftsController],
  providers: [GiftsService],
})
export class GiftsModule {}
