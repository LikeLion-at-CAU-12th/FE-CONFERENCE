import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddStudentForm from "./components/AddStudentForm";
import StudentList from "./components/StudentList";
import { Student } from "./models/Student";
import AddProfessorForm from "./components/AddProfessorForm";
import { Professor } from "./models/Professor";
import styled from "styled-components";

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [professors, setProfessors] = useState<Professor[]>([]);
  const [type, setType] = useState<string>("학생");

  // 학생 추가 후 , 학생 목록 업데이트 이 함수가 AddStudnetForm에서 학생을 추가시키는 함수 역할을 한다 그래서 밑에서 함수를 전달한다
  const handleAddStudent = (student: Student) => {
    setStudents([...students, student]); // 새로운 학생을 목록에 추가
  };

  // // 교수 추가 후 교수 목록 업데이트
  // const handleAddProfessor = (professor: Professor) => {
  //   setProfessors([...professors, professor]); // 새로운 교수를 목록에 추가
  // };

  return (
    <Container>
      <div>
        <h1>학생 및 교수 관리 시스템</h1>
        <Select>
          <label>유형 선택: </label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="학생">학생</option>
            <option value="교수">교수</option>
          </select>
        </Select>

        {/* Conditionally render the form based on the selected type */}
        {type === "학생" ? (
          <AddStudentForm onAddStudent={handleAddStudent} />
        ) : (
          <AddProfessorForm onAddStudent={handleAddStudent} />
        )}
      </div>
      <StudentList students={students}></StudentList>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 100px;
`;

const Select = styled.div`
  font-weight: bold;
  margin: 1rem;

  select {
    padding: 0.5rem 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    font-weight: bold;
    &:hover {
      border-color: #007bff;
    }
  }
`;
