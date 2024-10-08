// StudentList.tsx
import React from 'react';
import { Student } from '../models/Student';
import styled from 'styled-components';


interface StudentListProps {
  students: Student[];
}

const StudentList: React.FC<StudentListProps> = ({ students }) => {
  return (
    <div>
      <h2>학생 목록</h2>
      <TableContainer>
    <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>성별</th>
            <th>학생 ID</th>
            <th>수강 과목</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
              <td>{student.id}</td>
              <td>{student.listCourses() !== undefined && student.listCourses()?.length 
                ? student.listCourses()?.join(', ') : '없음'}</td>
              </tr>
          ))}
        </tbody>
      </table>
      </TableContainer>
      </div>
  );
};

export default StudentList;

const TableContainer = styled.div`
  max-height: 350px;
  overflow-y: auto;
`;