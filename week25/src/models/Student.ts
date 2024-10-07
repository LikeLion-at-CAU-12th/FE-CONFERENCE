import { Gender, Person } from "./Person";

export class Student implements Person {
    name : string;
    age : number;
    gender : Gender;
    studentId : number;
    courses?: string[]; //선택적 매개변수

    constructor(name : string, age: number, gender : Gender, studentId: number,courses?: string[]){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.studentId = studentId;
        this.courses = courses;
    }

    //수강과목 리스트 반환
    listCourses() : string[] | undefined {
        return this.courses;
    }
}