import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from './students/students.module';
import { AddressesModule } from './addresses/addresses.module';
import { Student, StudentSchema } from './students/schemas/student.schema';
import { Address, AddressSchema } from './addresses/schemas/address.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/mydb'), 
    MongooseModule.forFeature([
      { name: Student.name, schema: StudentSchema },
      { name: Address.name, schema: AddressSchema },
    ]),
    StudentsModule,
    AddressesModule,
  ],
})
export class AppModule {}
