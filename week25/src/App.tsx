import { useState } from "react"
import { Student } from "./models/Student";
import AddStudentForm from "./components/AddStudentForm";
import StudentList from "./components/StudentList";

const App : React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  const handleAddStudent = (student: Student) => {
    setStudents([...students,student]);
  };


return (
  <div>
    <h1>학생 관리 시스템</h1>
    <AddStudentForm onAddStudent={handleAddStudent}/>
    <StudentList students={students} />
  </div>
)

};

export default App;