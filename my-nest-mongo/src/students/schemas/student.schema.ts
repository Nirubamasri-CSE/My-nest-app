import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Address } from '../../addresses/schemas/address.schema';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  rollNo: number;

  @Prop({ type: Types.ObjectId, ref: Address.name }) // reference to Address
  address: Address | Types.ObjectId;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
