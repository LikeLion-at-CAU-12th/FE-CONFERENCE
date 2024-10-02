// AddStudentForm.tsx
import React, { useState } from "react";
import { Gender } from "../models/Person";
import { Student } from "../models/Student";
import styled from "styled-components";

interface AddProfessorFormProps {
  onAddStudent: (student: Student) => void;
}

const AddProfessorForm: React.FC<AddProfessorFormProps> = ({
  onAddStudent,
}) => {
  // usestate에 제네릭 사용
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | undefined>(undefined);
  const [gender, setGender] = useState<Gender>("Male");
  const [studentId, setStudentId] = useState<number | undefined>(undefined);
  const [courses, setCourses] = useState<string>(""); // 수강 과목 입력 필드

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (age === undefined || studentId === undefined) {
      alert("나이와 학생 ID를 입력하세요.");
      return;
    }

    const courseList = courses
      ? courses.split(",").map((course) => course.trim())
      : []; // 입력된 과목이 있으면 처리
    const newStudent = new Student(name, age, gender, studentId, courseList); // 수강 과목 리스트 추가
    onAddStudent(newStudent);

    // 입력 필드 초기화
    setName("");
    setAge(undefined);
    setStudentId(undefined);
    setCourses(""); // 수강 과목 입력 필드 초기화
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <Label>이름:</Label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>나이:</Label>
        <Input
          type="number"
          value={age === undefined ? "" : age}
          onChange={(e) =>
            setAge(e.target.value ? parseInt(e.target.value) : undefined)
          }
        />
      </FormGroup>
      <FormGroup>
        <Label>성별:</Label>
        <Select
          value={gender}
          onChange={(e) => setGender(e.target.value as Gender)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>교수 ID:</Label>
        <Input
          type="number"
          value={studentId === undefined ? "" : studentId}
          onChange={(e) =>
            setStudentId(e.target.value ? parseInt(e.target.value) : undefined)
          }
        />
      </FormGroup>
      <FormGroup>
        <Label>담당 과목 (쉼표로 구분):</Label>
        <Input
          type="text"
          placeholder="수강 과목을 쉼표로 구분하여 입력"
          value={courses}
          onChange={(e) => setCourses(e.target.value)}
        />
      </FormGroup>
      <Button type="submit">교수 추가</Button>
    </FormContainer>
  );
};

export default AddProfessorForm;

const FormContainer = styled.form`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: auto;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  font-weight: bold;

  &:hover {
    background-color: #0056b3;
  }
`;
