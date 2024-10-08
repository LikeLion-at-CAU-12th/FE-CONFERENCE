import { func } from "prop-types";
import { Student } from "../models/Student";


const students : Student[] = [];

export function addStudent(student : Student): void {
    students.push(student);
}

export function getStudents(): Student[] {
    return students;
}