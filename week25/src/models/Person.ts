//타입과 인터페이스 정의
export type Gender = "Male" | "Female";

export interface Person{
    name: string;
    age: number;
    gender: Gender;
}
