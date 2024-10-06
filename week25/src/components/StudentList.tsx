import styled from "styled-components";
import { Student } from "../models/Student";

interface StudentListProps{
    students: Student[];
}

const StudentList: React.FC<StudentListProps> = ({ students }) => {
    return(<ContentArea>
            <Title>학생 목록</Title>
            <TextArea>
            <table  cellPadding={10} cellSpacing={0}
             style={{border:'none', width:'100%', textAlign:'center'}}>
                <thead>
                    <tr>
                    <th style={{ fontWeight: 'normal' }}>이름</th>
                    <th style={{ fontWeight: 'normal' }}>나이</th>
                    <th style={{ fontWeight: 'normal' }}>성별</th>
                    <th style={{ fontWeight: 'normal' }}>학생 ID</th>
                    <th style={{ fontWeight: 'normal' }}>수강과목</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student)=> (
                        <tr key={student.studentId}>
                            <td style={{ color:'rgb(153,153,153)' }}>{student.name}</td>
                            <td style={{ color:'rgb(153,153,153)' }}>{student.age}</td>
                            <td style={{ color:'rgb(153,153,153)' }}>{student.gender}</td>
                            <td style={{ color:'rgb(153,153,153)' }}>{student.studentId}</td>
                            <td style={{ color:'rgb(153,153,153)' }}>{student.listCourses() !== undefined && student.listCourses()?.length? student.listCourses()?.join(', ') : '없음'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </TextArea></ContentArea>
    )
}

export default StudentList;

const ContentArea = styled.div`
    width: 100%;
    margin-bottom: 20px;
`;

const TextArea = styled.div`
  display: flex;
  width: 100%;
flex-direction: column;
align-items: flex-start;
align-self: stretch;
border-radius: 10px;
background: var(--backgrounds-grouped-secondary, #FFF);
`;


const Title = styled.div`
width: 100%;
  display: flex;
flex-direction: column;
padding-left: 10px;
align-items: flex-start;
align-self: stretch;  
color: var(--Labels-Secondary, rgba(60, 60, 67, 0.60));
font-feature-settings: 'liga' off, 'clig' off;
font-family: "SF Pro";
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 123.077% */
text-transform: uppercase;
margin-bottom: 5px;
`;