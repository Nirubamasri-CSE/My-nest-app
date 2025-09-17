import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from './schemas/student.schema';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  // Create student
  async create(createStudentDto: any): Promise<Student> {
    const newStudent = new this.studentModel(createStudentDto);
    return newStudent.save();
  }

  // Get all students
  async findAll(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }

  // Get one student by ID
  async findOne(id: string): Promise<Student | null> {
    return this.studentModel.findById(id).exec();
  }

  // Update student by ID
  async update(id: string, updateStudentDto: any): Promise<Student | null> {
    return this.studentModel.findByIdAndUpdate(id, updateStudentDto, {
      new: true,
    }).exec();
  }

  // Delete student by ID
  async remove(id: string): Promise<any> {
    return this.studentModel.findByIdAndDelete(id).exec();
  }
}
