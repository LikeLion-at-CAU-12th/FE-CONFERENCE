import { Person, Gender } from "./Person";

export class Student implements Person {
  name: string;
  age: number;
  gender: Gender;
  studentId: number;
  courses?: string[]; // 선택적 매개변수로 수강 과목 정의

  constructor(
    name: string,
    age: number,
    gender: Gender,
    studentId: number,
    courses?: string[]
  ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.studentId = studentId;
    this.courses = courses; // courses가 undefined일 수 있음. 선택적으로 받으므로 받지 않을 경우
  }

  listCourses(): string[] | undefined {
    return this.courses;
  }
}
