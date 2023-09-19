import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GuestDocument = HydratedDocument<Guest>;

@Schema()
export class Guest {
  @Prop({ required: true })
  name: string;

  @Prop()
  age: number;
}

export const GuestSchema = SchemaFactory.createForClass(Guest);
