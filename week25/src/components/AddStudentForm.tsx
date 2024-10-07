// AddStudentForm.tsx
import React, { useState } from 'react';
import { Gender } from '../models/Person';
import { Student } from '../models/Student';
import { Professor } from '../models/Professor';

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
    } else{
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>구분</label>
        <select value={type} onChange={(e) => setType(e.target.value as 'student' | 'professor')}>
          <option value="student">학생</option>
          <option value="professor">교수</option>
        </select>
      </div>
      <div>
        <label>이름:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>나이:</label>
        <input
          type="number"
          value={age === undefined ? '' : age} // 값이 없을 경우 빈 문자열로 처리
          onChange={(e) => setAge(e.target.value ? parseInt(e.target.value) : undefined)}
        />
      </div>
      <div>
        <label>성별:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value as Gender)}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div>
        <label>학생 ID:</label>
        <input
          type="number"
          value={id === undefined ? '' : id} // 값이 없을 경우 빈 문자열로 처리
          onChange={(e) => setId(e.target.value ? parseInt(e.target.value) : undefined)}
        />
      </div>
      <div>
        <label>수강 과목 (쉼표로 구분):</label>
        <input
          type="text"
          placeholder="수강 과목을 쉼표로 구분하여 입력"
          value={courses}
          onChange={(e) => setCourses(e.target.value)}
        />
      </div>
      <button type="submit">추가</button>
    </form>
  );
};

export default AddStudentForm;
