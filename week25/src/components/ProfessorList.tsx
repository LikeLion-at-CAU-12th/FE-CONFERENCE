// StudentList.tsx
import React from 'react';
import { Professor } from '../models/Professor';
import styled from 'styled-components';


interface ProfessorListProps {
  professors : Professor[];
}

const ProfessorList: React.FC<ProfessorListProps> = ({ professors }) => {
  return (
    <div>
      <h2>교수 목록</h2>
    <TableContainer>
    <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>성별</th>
            <th>교수 ID</th>
            <th>당담 과목</th>
          </tr>
        </thead>
        <tbody>
          {professors.map((professor) => (
            <tr key={professor.id}>
              <td>{professor.name}</td>
              <td>{professor.age}</td>
              <td>{professor.gender}</td>
              <td>{professor.id}</td>
              <td>{professor.listCourses() !== undefined && professor.listCourses()?.length 
                ? professor.listCourses()?.join(', ') : '없음'}</td>
              </tr>
          ))}
        </tbody>
      </table>
      </TableContainer>
    </div>
  );
};

export default ProfessorList;

const TableContainer = styled.div`
  max-height: 350px;
  overflow-y: auto;
`;