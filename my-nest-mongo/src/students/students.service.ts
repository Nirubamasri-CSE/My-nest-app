// src/students/students.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Student, StudentDocument } from './schemas/student.schema';
import { Address } from '../addresses/schemas/address.schema';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  // Create a new student
  async create(createStudentDto: any): Promise<Student> {
    // Ensure address is an ObjectId
    if (createStudentDto.address) {
      createStudentDto.address = new Types.ObjectId(createStudentDto.address);
    }
    const createdStudent = new this.studentModel(createStudentDto);
    return createdStudent.save();
  }

  // Get all students with populated address
  async findAll() {
    return this.studentModel.find().populate('address').lean().exec();
  }

  // Get a single student by id with populated address
  async findOne(id: string): Promise<(Student & { address: Address }) | null> {
    const student = await this.studentModel.findById(id).populate<{ address: Address }>('address').lean().exec();
    return student as (Student & { address: Address }) | null;
  }
}
