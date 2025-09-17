import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AddressDocument = Address & Document;

@Schema()
export class Address {
  @Prop({ required: true })
  street: string;

  @Prop({ required: true })
  city: string;

  @Prop()
  state: string;

  @Prop()
  zip: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
import { Types } from 'mongoose';

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
