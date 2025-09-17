import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  rollNo: number;

  // Reference to Address document
  @Prop({ type: Types.ObjectId, ref: 'Address' })
  address: Types.ObjectId;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
