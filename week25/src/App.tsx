import { useState } from "react"
import { Student } from "./models/Student";
import AddStudentForm from "./components/AddStudentForm";
import StudentList from "./components/StudentList";
import { Professor } from "./models/Professor";
import ProfessorList from "./components/ProfessorList";

const App : React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [professors, setProfessor] = useState<Professor[]>([]);

  const handleAddStudent = (student: Student) => {
    setStudents([...students,student]);
  };

  const handleAddProfessor = (professor:Professor) => {
    setProfessor([...professors,professor]);
  }


return (
  <div>
    <h1>학생 관리 시스템</h1>
    <AddStudentForm onAddStudent={handleAddStudent} onAddProfessor={handleAddProfessor}/>
    <StudentList students={students}/>
    <ProfessorList professors={professors}/>
  </div>
)

};

export default App;