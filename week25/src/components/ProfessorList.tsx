// ProfessorList.tsx
import React from 'react';
import { Professor } from '../models/Professor';

interface ProfessorListProps {
  professors: Professor[];
}

const ProfessorList: React.FC<ProfessorListProps> = ({ professors }) => {
  return (
    <div>
      <h2>교수 목록</h2>
    <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>성별</th>
            <th>교수 ID</th>
            <th>담당 과목</th>
          </tr>
        </thead>
        <tbody>
          {professors.map((professor) => (
            <tr key={professor.professorId}>
              <td>{professor.name}</td>
              <td>{professor.age}</td>
              <td>{professor.gender}</td>
              <td>{professor.professorId}</td>
              <td>{professor.listCourses() !== undefined && professor.listCourses()?.length 
                ? professor.listCourses()?.join(', ') : '없음'}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfessorList;