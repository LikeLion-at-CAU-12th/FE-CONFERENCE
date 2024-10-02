// Gender라는 새로운 사용자 지정 타입을 만듬 => 유니온 타입으로 구성됨
export type Gender = "Male" | "Female";

export interface Person {
  name: string;
  age: number;
  gender: Gender;
}
