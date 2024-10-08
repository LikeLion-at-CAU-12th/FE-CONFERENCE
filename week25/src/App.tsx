import { useState } from "react";
import { Student } from "./models/Student";
import AddStudentForm from "./components/AddStudentForm";
import StudentList from "./components/StudentList";
import { Professor } from "./models/Professor";
import ProfessorList from "./components/ProfessorList";
import styled from "styled-components";

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [professors, setProfessors] = useState<Professor[]>([]);

  const handleAddStudent = (student: Student) => {
    setStudents([...students, student]);
  };

  const handleAddProfessor = (professor: Professor) => {
    setProfessors([...professors, professor]);
  };

  return (
    <Container>
      <h1>학생 및 교수 관리 시스템</h1>
      <AddStudentForm onAddStudent={handleAddStudent} onAddProfessor={handleAddProfessor} />
      <ListContainer>
        <StudentList students={students} />
        <ProfessorList professors={professors} />
      </ListContainer>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 1% auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  height : 100%;
  font-family: 'HakgyoansimBadasseugiTTF-L';
`;

const ListContainer = styled.div`
  display : flex;
  justify-content: 	space-around;
  gap: 10px;
`
