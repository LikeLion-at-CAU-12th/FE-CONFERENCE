import {Person, Gender} from './Person';

export class Professor implements Person {
    name: string;
    age: number;
    gender: Gender;
    professorId: number;
    courses?: string[];

    constructor(name:string, age:number, gender: Gender, professorId: number, courses?:string[]){
        this.name = name
        this.age = age;
        this.gender = gender;
        this.professorId = professorId;
        this.courses = courses; // courses가 undefined할 수 있음
    }

    // 수강 과목 리스트 반환
    listCourses(): string[] | undefined {
        return this.courses;
    }
}