import React from "react";
import styled from "styled-components";
import { Student } from "../models/Student";

interface StudentListProps {
  students: Student[];
}

const StudentList: React.FC<StudentListProps> = ({ students }) => {
  return (
    <Container>
      <Title>목록</Title>
      <Table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <TableHeader>이름</TableHeader>
            <TableHeader>나이</TableHeader>
            <TableHeader>성별</TableHeader>
            <TableHeader>ID</TableHeader>
            <TableHeader>수강 or 담당과목</TableHeader>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <TableRow key={student.studentId} isEven={index % 2 === 0}>
              <TableData>{student.name}</TableData>
              <TableData>{student.age}</TableData>
              <TableData>{student.gender}</TableData>
              <TableData>{student.studentId}</TableData>
              <TableData>
                {student.listCourses() !== undefined &&
                student.listCourses()?.length
                  ? student.listCourses()?.join(", ")
                  : "없음"}
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default StudentList;

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  border-radius: 12px;
  overflow: hidden; /* 둥근 모서리가 보이게 함*/
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.th`
  padding: 10px;
  background-color: #d5d5d5;
`;

const TableRow = styled.tr<{ isEven: boolean }>`
  background-color: ${(props) => (props.isEven ? "#ffffff" : "#f9f9f9")};
`;

const TableData = styled.td`
  padding: 10px;
`;
