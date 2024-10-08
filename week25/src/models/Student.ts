import {Person, Gender} from './Person';

export class Student implements Person {
    name: string;
    age: number;
    gender: Gender;
    studentId: number;
    courses?: string[]; // ?는 선택적 사항일때

    constructor(name:string, age:number, gender: Gender, studentId: number, courses?:string[]){
        this.name = name
        this.age = age;
        this.gender = gender;
        this.studentId = studentId;
        this.courses = courses; // courses가 undefined할 수 있음
    }

    // 수강 과목 리스트 반환
    listCourses(): string[] | undefined {
        return this.courses;
    }
}