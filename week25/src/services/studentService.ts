import { Student } from "../models/Student";

const students: Student[] = [];

//add students
export function addStudent(student: Student): void{
    students.push(student);
}

export function getStudents(): Student[] {
    return students;
}