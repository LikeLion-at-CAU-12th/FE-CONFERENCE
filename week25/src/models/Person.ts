export type Gender = "Male" | "Female";

export interface Person {
    name : string;
    age: number;
    gender: Gender; //union type : OR 연산자를 통해서
}