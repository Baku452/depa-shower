import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Guest } from 'src/guest/schema/guest.schema';

export type GiftDocument = HydratedDocument<Gift>;

@Schema()
export class Gift {
  @Prop()
  name: string;

  @Prop()
  isCash: boolean;

  @Prop()
  price: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Guest' })
  owner: Guest;
}

export const GiftSchema = SchemaFactory.createForClass(Gift);
