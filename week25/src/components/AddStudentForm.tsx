// AddStudentForm.tsx
import React, { useState } from 'react';
import { Gender } from '../models/Person';
import { Student } from '../models/Student';
import { Professor } from '../models/Professor';
import styled from 'styled-components';

interface AddStudentFormProps {
  onAddStudent: (student: Student) => void;
  onAddProfessor: (professor: Professor) => void;
}

const AddStudentForm: React.FC<AddStudentFormProps> = ({ onAddStudent, onAddProfessor }) => {
  const [type, setType] = useState<'student' | 'professor'>('student');
  const [name, setName] = useState('');
  const [age, setAge] = useState<number | undefined>(undefined);
  const [gender, setGender] = useState<Gender>('Male');
  const [id, setId] = useState<number | undefined>(undefined);
  const [courses, setCourses] = useState<string>(''); // 수강 과목 입력 필드

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (age === undefined || id === undefined) {
      alert('나이와 ID를 입력하세요.');
      return;
    }

    const courseList = courses ? courses.split(',').map(course => course.trim()) : []; // 입력된 과목이 있으면 처리
    
    if(type === 'student'){
      const newStudent = new Student(name, age, gender, id, courseList); // 수강 과목 리스트 추가
      onAddStudent(newStudent);
    } else { // type === 'professor'
      const newProfessor = new Professor(name, age, gender, id, courseList);
      onAddProfessor(newProfessor);
    }

    // 입력 필드 초기화
    setType('student');
    setName('');
    setAge(undefined);
    setId(undefined);
    setCourses(''); // 수강 과목 입력 필드 초기화
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Label>구분</Label>
        <select value={type} onChange={(e) => setType(e.target.value as 'student' | 'professor')}>
          <option value="student">학생</option>
          <option value="professor">교수</option>
        </select>
      </div>
      <div>
        <Label>이름</Label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <Label>나이</Label>
        <input
          type="number"
          value={age === undefined ? '' : age} // 값이 없을 경우 빈 문자열로 처리
          onChange={(e) => setAge(e.target.value ? parseInt(e.target.value) : undefined)}
        />
      </div>
      <div>
        <Label>성별</Label>
        <select value={gender} onChange={(e) => setGender(e.target.value as Gender)}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div>
      <Label>{type === 'student' ? '학생 ID' : '교수 ID'}</Label>
        <input
          type="number"
          value={id === undefined ? '' : id} // 값이 없을 경우 빈 문자열로 처리
          onChange={(e) => setId(e.target.value ? parseInt(e.target.value) : undefined)}
        />
      </div>
      <div>
        <Label>{type === 'student' ? '수강 과목':'당담 과목'}</Label>
        <input
          style={{textAlign:"center"}}
          type="text"
          placeholder="쉼표로 구분하여 입력"
          value={courses}
          onChange={(e) => setCourses(e.target.value)}
        />
      </div>
      <button type="submit">추가</button>
    </Form>
  );
};

export default AddStudentForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap : 10px;
`

const Label = styled.label`
  display : inline-block;
  border : 1px solid black ;
  padding : 2px 9px;
  min-width : 60px;
  border-radius : 5px;
  margin-right : 10px;
  text-align: center;
`