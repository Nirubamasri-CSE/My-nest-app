import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from './schemas/student.schema';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentsService {   // ✅ class must be exported
  constructor(@InjectModel(Student.name) private studentModel: Model<StudentDocument>) {}

  async create(createStudentDto: CreateStudentDto) {
    const student = new this.studentModel(createStudentDto);
    return student.save();
  }

  async findAll() {
    return this.studentModel.find().exec();
  }

  async findOne(id: string) {
    return this.studentModel.findById(id).exec();
  }
}

// ✅ Make sure the file ends here, no extra export default
