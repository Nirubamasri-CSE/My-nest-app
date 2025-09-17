import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { Student, StudentSchema } from './schemas/student.schema';
import { Address, AddressSchema } from '../addresses/schemas/address.schema'; // correct path

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Student.name, schema: StudentSchema },
      { name: Address.name, schema: AddressSchema }, // include Address
    ]),
  ],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}

