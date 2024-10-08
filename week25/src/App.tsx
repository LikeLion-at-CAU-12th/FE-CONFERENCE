import React, { useState } from 'react';
import AddStudentForm from './components/AddStudentForm';
import StudentList from './components/StudentList';
import { Student } from './models/Student';
import { Professor } from './models/Professor';
import ProfessorList from './components/ProfessorList';
import AddProfessorForm from './components/AddProfessorForm';
import './App.css';

const App: React.FC = ()=>{
  const [students, setStudents] = useState<Student[]>([]); // 빈 배열로 초기화
  const [professors, setProfessors] = useState<Professor[]>([]); // 빈 배열로 초기화
  const [type, setType] = useState('Student');

  // 학생 추가 후, 학생 목록 업데이트
  const handleAddStudent = (student: Student) => {
    setStudents([...students, student]); // 새로운 학생을 목록에 추가
  };
  const handleAddProfessor = (professor: Professor) => {
    setProfessors([...professors, professor]); // 새로운 학생을 목록에 추가
  };

  return (
    <div>
      <h1 id = 'title'>학생 교수 관리 시스템</h1>
      <div id = 'type'>
        <label>유형 선택:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Student">Student</option>
          <option value="Professor">Professor</option>
        </select>
      </div>
      <div id ='form'>
      {type == 'Student'?(
        <AddStudentForm onAddStudent={handleAddStudent}/>
      ):
      (<AddProfessorForm onAddProfessor={handleAddProfessor}/>)}
      </div>
      
      <div id = 'tablebox'>
        <StudentList students={students}/>
        <ProfessorList professors={professors}/>
      </div>
        
    </div>
  )
}

export default App;