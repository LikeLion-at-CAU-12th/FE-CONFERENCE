//인터페이스임
export type Gender = "Male" | "Female"; // union type

export interface Person {
    name: string;
    age: number;
    gender: Gender;
}