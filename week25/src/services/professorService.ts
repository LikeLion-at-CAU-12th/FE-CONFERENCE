import { Professor } from "../models/Professor";

const professors: Professor[] = [];

//add professors
export function addStudent(student: Professor): void{
    professors.push(student);
}

export function getStudents(): Professor[] {
    return professors;
}