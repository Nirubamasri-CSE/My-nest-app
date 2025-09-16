import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './schemas/student.schema';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { AddressesModule } from '../addresses/addresses.module';

@Module({
  imports: [
    AddressesModule,
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
