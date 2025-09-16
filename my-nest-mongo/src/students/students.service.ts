import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from './schemas/student.schema';

@Injectable()
export class StudentsService {
  constructor(@InjectModel(Student.name) private studentModel: Model<StudentDocument>) {}

  async create(data: any) {
    const student = new this.studentModel(data);
    return student.save();
  }

  async findAll() {
    return this.studentModel.find().populate('address').exec(); // populate address
  }

  async findOne(id: string) {
    return this.studentModel.findById(id).populate('address').exec();
  }
}
