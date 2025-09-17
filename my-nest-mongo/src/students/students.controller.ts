import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  // ✅ Create a new student
  @Post('createStudent')
  createStudent(@Body() createStudentDto: any) {
    return this.studentsService.create(createStudentDto);
  }

  // ✅ Get all students
  @Get('getAllStudents')
  getAllStudents() {
    return this.studentsService.findAll();
  }

  // ✅ Get student by ID
  @Get('getStudentById/:id')
  getStudentById(@Param('id') id: string) {
    return this.studentsService.findOne(id);
  }

  // ✅ Update student by ID
  @Put('updateStudent/:id')
  updateStudent(@Param('id') id: string, @Body() updateStudentDto: any) {
    return this.studentsService.update(id, updateStudentDto);
  }

  // ✅ Delete student by ID
  @Delete('deleteStudent/:id')
  deleteStudent(@Param('id') id: string) {
    return this.studentsService.remove(id);
  }

  // ✅ Wildcard route: captures anything after /students/
  @Get('*path')
  getDynamic(@Param('path') path: string) {
    return path || 'No extra path provided';
  }
}
