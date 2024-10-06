import React, { useState } from 'react';
import './App.css';
import AddStudentForm from './components/AddStudentForm';
import StudentList from './components/StudentList';
import { Student } from './models/Student';
import AddProfessorForm from './components/AddProfessorForm';
import { Professor } from './models/Professor';
import ProfessorList from './components/ProfessorList';
import styled from 'styled-components';
//만들어둔 interface를 사용해서 교수관리도.. 처음에 학생,교수 드롭박스 선택..

const App: React.FC = () => {
  const [kind, setKind] = useState('student');
  const [students, setStudents] = useState<Student[]>([]);
  const [professors, setProfessors] = useState<Professor[]>([]);

  const handleAddStudent = (student: Student) => {
    setStudents([...students, student]);
  }
  const handleAddProfessor = (professor: Professor) => {
    setProfessors([...professors, professor]);
  }

  return (
    <Bezel>
      <Navigation><Title>Managing System</Title></Navigation>
      <ContentArea>
      <TextField>
      <Label>유형 선택
      <select value={kind} onChange={(e) => setKind(e.target.value)}
          style={{border:'none', fontSize:'16px', color:'rgb(153,153,153)', width:'60px'}}>
          <option value="student">학생</option>
          <option value="professor">교수</option></select></Label></TextField>
          {kind === 'student' ? (
      <AddStudentForm onAddStudent={handleAddStudent} /> ) : (<AddProfessorForm onAddProfessor={handleAddProfessor}/> )}
      <StudentList students={students} />
      <ProfessorList professors={professors} />
      </ContentArea>
    </Bezel>
  );
}

export default App;

const Bezel = styled.div`
  display: flex;
  width: 100%;
  height: 874px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const Navigation = styled.div`
display: flex;
width: 100%;
height: 150px;
align-items: left;
background-color: rgb(252,252,253);
`;

const Title = styled.div`
  display: flex;
padding: 3px 16px 8px 16px;
flex-direction: column-reverse;
align-items: flex-start;
gap: 10px;
align-self: stretch;
color: var(--Labels-Primary, #000);
font-feature-settings: 'liga' off, 'clig' off;

font-family: "SF Pro";
font-size: 34px;
font-style: normal;
font-weight: 700;
line-height: 41px; /* 120.588% */
letter-spacing: 0.4px;
`;

const TextField = styled.div`
  display: flex;
flex-direction: column;
align-items: flex-start;
align-self: stretch;
border-radius: 10px;
background: var(--backgrounds-grouped-secondary, #FFF);
margin-bottom: 20px;
`;

const ContentArea = styled.div`
height: 100%;
  display: flex;
padding: 16px 16px 50px 16px;
flex-direction: column;
align-items: center;
align-self: stretch;
background-color: rgb(242,242,247);
`;

const Label = styled.div`
  display: flex;
height: 44px;
width: 95%;
padding-left: 16px;
justify-content: space-between;
align-items: center;
gap: 4px;
flex: 1 0 0;
padding-top: 10px;
padding-bottom: 10px;
`;