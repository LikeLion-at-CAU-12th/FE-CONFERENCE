import styled from "styled-components";
import { Professor } from "../models/Professor";

interface ProfessorListProps{
    professors: Professor[];
}

const ProfessorList: React.FC<ProfessorListProps> = ({ professors }) => {
    return(
        <ContentArea>
            <Title>교수 목록</Title>
            <TextArea>
            <table cellPadding={10} cellSpacing={0}
             style={{border:'none', width:'100%', textAlign:'center'}}>
                <thead>
                    <tr>
                    <th style={{ fontWeight: 'normal' }}>이름</th>
                    <th style={{ fontWeight: 'normal' }}>나이</th>
                    <th style={{ fontWeight: 'normal' }}>성별</th>
                    <th style={{ fontWeight: 'normal' }}>교수 ID</th>
                    <th style={{ fontWeight: 'normal' }}>담당 과목</th>
                    </tr>
                </thead>
                <tbody>
                    {professors.map((professor)=> (
                        <tr key={professor.studentId}>
                            <td style={{ color:'rgb(153,153,153)' }}>{professor.name}</td>
                            <td style={{ color:'rgb(153,153,153)' }}>{professor.age}</td>
                            <td style={{ color:'rgb(153,153,153)' }}>{professor.gender}</td>
                            <td style={{ color:'rgb(153,153,153)' }}>{professor.studentId}</td>
                            <td style={{ color:'rgb(153,153,153)'}}>{professor.listCourses() !== undefined && professor.listCourses()?.length? professor.listCourses()?.join(', ') : '없음'}</td>
                        </tr>
                    ))}
                </tbody>
            </table></TextArea>
        </ContentArea>
    )
}

export default ProfessorList;

const ContentArea = styled.div`
    width: 100%;
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
margin-bottom: 5px;
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
`;