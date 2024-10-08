import { Gender, Person } from "./Person";

//Student 클래스 정의
export class Professor implements Person{
    name: string;
    age: number
    gender: Gender;
    studentId: number;
    courses?: string[];

constructor( name: string, age: number, gender: Gender, studentId: number, courses?: string[]){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.studentId = studentId;
    this.courses = courses;
}

listCourses(): string[] | undefined {
    return this.courses;
}
}