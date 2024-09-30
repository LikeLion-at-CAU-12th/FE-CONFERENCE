import React, { useState, useCallback } from 'react'
import styled from 'styled-components';
import { QuizDom, QuestionContainer, ButtonDom, Button } from './Question_1.jsx';

import { useNavigate } from 'react-router-dom';
import ProgressBar from '../../components/ProgressBar.js';

const Question_2 = () => {
  const navigate = useNavigate();
  const [answer2, setAnswer2] = useState();

  // useCallback을 사용하여 함수 재생성을 방지
  const handleNextClick = useCallback(() => {
    if (!answer2) {
      alert("답변을 선택해주세요.");
    } else {
      alert("테스트 끝");
      // navigate("/typetest/3");
    }
  }, [answer2, navigate]);

  const handleBeforeClick = useCallback(() => {
    navigate("/typetest/1");
  }, [navigate]);

  const reasons = [
    "jobPreparation",
    "internship",
    "academicStress",
    "selfDevelopment",
    "diverseExperiences",
    "financialBurden",
    "mentalStability",
    "newCareerExploration"
  ];
  
  return (
    <>
      <QuizDom>
        <ProgressBar currentStep={2} totalSteps={2} />
        <QuestionContainer>휴학을 선택한 계기는 무엇인가요?</QuestionContainer>
        <Answers>
          {reasons.map((reason) => (
            <MemoizedAnswer 
              key={reason} 
              reason={reason} 
              // key 값을 reason 으로 하여 고유성 확보
              checked={answer2 === reason} 
              onChange={(e) => setAnswer2(e.target.value)} 
            />
          ))}
        </Answers>
        <ButtonDom>
          <Button onClick={handleBeforeClick}>이전</Button>
          <Button 
            style={{ backgroundColor: 'rgba(30, 58, 138, 1)', color:'white' }} 
            onClick={handleNextClick}
          >
            다음
          </Button>
        </ButtonDom>
      </QuizDom>
    </>
  );
};

// Answer 컴포넌트 메모이제이션
const Answer = ({ reason, checked, onChange }) => (
  <AnswerItem checked={checked}>
    <label>
      <input
        type="radio" 
        name="reason" 
        value={reason} 
        checked={checked}
        onChange={onChange}
      />
      {getReasonLabel(reason)}
    </label>
  </AnswerItem>
);

const MemoizedAnswer = React.memo(Answer);

function getReasonLabel(reason) {
  switch (reason) {
    case "jobPreparation":
      return "취업 준비를 위해서";
    case "internship":
      return "인턴 근무를 위해서";
    case "academicStress":
      return "학업 스트레스를 완화하기 위해서";
    case "selfDevelopment":
      return "자기 계발을 위해서";
    case "diverseExperiences":
      return "다양한 경험을 위해서";
    case "financialBurden":
      return "경제적 부담 완화를 위해서";
    case "mentalStability":
      return "정서적 안정, 신체적 건강을 위해서";
    case "newCareerExploration":
      return "새로운 진로 탐색을 위해서";
    default:
      return "";
  }
}

export default Question_2;

const Answers = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  list-style: none;
  width: 590px;
  padding: 20px 31px 20px 10px;
  border-radius: 10px;
`;

const AnswerItem = styled.li`
  display: flex;
  align-items: center;
  margin: 5px;
  width: 100%;
  height: 39px;
  padding: 0px 0px 0px 10px;
  border-radius: 20px;
  gap: 10px;
  background-color: ${props => props.checked ? 'rgba(56, 189, 248, 0.07)' : 'rgba(30, 58, 138, 0.04)'};
  border: ${props => props.checked ? '1.4px solid rgba(30, 58, 138, 0.6)' : 'none'};
`;