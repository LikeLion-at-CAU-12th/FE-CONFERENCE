import React, { useState } from 'react'
import { Professor } from '../models/Professor';
import { Gender } from '../models/Person';
import styled from 'styled-components';

interface AddProfessorFormProps {
    onAddProfessor: (professor: Professor) => void;
  }
  
  const AddProfessorForm: React.FC<AddProfessorFormProps> = ({ onAddProfessor }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState<number | undefined>(undefined);
    const [gender, setGender] = useState<Gender>('Male');
    const [professorId, setProfessorId] = useState<number | undefined>(undefined);
    const [courses, setCourses] = useState<string>(''); // 수강 과목 입력 필드
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  
      if (age === undefined || professorId === undefined) {
        alert('나이와 교수 ID를 입력하세요.');
        return;
      }
  
      const courseList = courses ? courses.split(',').map(course => course.trim()) : []; // 입력된 과목이 있으면 처리
      const newProfessor = new Professor(name, age, gender, professorId, courseList); // 수강 과목 리스트 추가
      onAddProfessor(newProfessor);
  
      // 입력 필드 초기화
      setName('');
      setAge(undefined);
      setProfessorId(undefined);
      setCourses(''); // 수강 과목 입력 필드 초기화
    };
  
    return (
      <ContentArea>
      <form onSubmit={handleSubmit}>
        <TextField><Row>
          <label>이름</label>
          <input
            type="text"
            value={name}
            placeholder='Name'
          style={{height:'100%', fontSize:'16px', width:'250px', border:'none'}}
            onChange={(e) => setName(e.target.value)}
          />
        </Row>
        <Row>
          <label>나이</label>
          <input
            type="number"
            placeholder='Age'
          style={{height:'100%', fontSize:'16px', width:'250px', border:'none'}}
            value={age === undefined ? '' : age} // 값이 없을 경우 빈 문자열로 처리
            onChange={(e) => setAge(e.target.value ? parseInt(e.target.value) : undefined)}
          />
        </Row>
        <Row>
          <label>성별</label>
          <select value={gender} onChange={(e) => setGender(e.target.value as Gender)}
                      style={{border:'none', fontSize:'16px', color:'rgb(153,153,153)'}}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </Row>
        <Row>
          <label>교수 ID</label>
          <input
            type="number"
            placeholder='Number'
            style={{height:'100%', fontSize:'16px', width:'250px', border:'none'}}  
            value={professorId === undefined ? '' : professorId} // 값이 없을 경우 빈 문자열로 처리
            onChange={(e) => setProfessorId(e.target.value ? parseInt(e.target.value) : undefined)}
          />
        </Row>
        <Row1>
          <label>담당 과목</label>
          <input
            type="text"
            placeholder="Use Comma"
          style={{height:'100%', fontSize:'16px', width:'250px', border:'none'}}
            value={courses}
            onChange={(e) => setCourses(e.target.value)}
          />
        </Row1></TextField>
        <button type="submit"
          style={{
            borderRadius: "10px",
            height: "44px",
            width: "100%",
            alignItems: "center",
            gap: "4px",
            flex: "1 0 0",
            paddingTop: "7px",
            paddingBottom: "7px",
            background: "#FFF",
            border: "none",
            textAlign: "center",
            marginTop: "20px",
            marginBottom:"20px",
            color: "#007AFF",
            fontSize: "17px"
          }}>교수 추가</button>
      </form></ContentArea>
    );
  };
  
  export default AddProfessorForm;

  const ContentArea = styled.div`
  width: 100%;
`;

const Row = styled.div`
  display: flex;
height: 20px;
width: 95%;
padding-left: 16px;
justify-content: space-between;
align-items: center;
gap: 4px;
flex: 1 0 0;
padding-top: 10px;
padding-bottom: 10px;
border-bottom: 0.333px solid var(--Separators-Non-opaque, rgba(84, 84, 86, 0.34));
`;

const Row1 = styled.div`
  display: flex;
height: 20px;
width: 95%;
padding-left: 16px;
justify-content: space-between;
align-items: center;
gap: 4px;
flex: 1 0 0;
padding-top: 10px;
padding-bottom: 10px;
`;

const TextField = styled.div`
  display: flex;
  width: 100%;
flex-direction: column;
align-items: flex-start;
align-self: stretch;
border-radius: 10px;
background: var(--backgrounds-grouped-secondary, #FFF);
`;
