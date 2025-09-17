export class CreateStudentDto {
  readonly name: string;
  readonly rollNo: string;  // match type with schema
  readonly address?: string;
}
