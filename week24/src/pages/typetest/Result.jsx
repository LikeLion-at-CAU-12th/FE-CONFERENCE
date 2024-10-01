import React, { Component } from 'react';
import styled from 'styled-components';
// import { FiArrowRightCircle } from 'react-icons/fi';
import axios from 'axios';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: "",
      content: [],
      image: ""
    };
  }

  // 데이터 로드를 위한 메서드
  getTypeTestResult = async (type) => {
    try {
      const response = await axios.get(`https://maknaengee.p-e.kr/typetest/result/${type}`);
      this.setState({
        userType: response.data.user_type_display,
        content: response.data.content.split('\n'),
        image: response.data.image
      });
    } catch (error) {
      console.error('Error in getInfo:', error.response ? error.response.data : error.message);
      throw error;
    }
  }

  // 컴포넌트가 처음 마운트될 때 데이터를 가져오기
  componentDidMount() {
    const { type } = this.props.match.params;
    if (type) {
      this.getTypeTestResult(type);
    }
  }

  // 컴포넌트가 업데이트될 때 데이터를 다시 
  componentDidUpdate(prevProps) {
    const { type } = this.props.match.params;
    if (prevProps.match.params.type !== type) {
      this.getTypeTestResult(type);
    }
  }

  toHome = () => {
    this.props.history.push('/');
  }

  render() {
    const { userType, content, image } = this.state;
    return (
      <>
        <ResultDom>
          <Image>
            <img src={image} style={{ width: '100%' }} alt="result"></img>
          </Image>
          <Title>"{userType}"</Title>
          <ResultInfo>
            {content.map((line, index) => (
              <Line key={index}>
                <p>{line}</p>
              </Line>
            ))}
          </ResultInfo>
        </ResultDom>
      </>
    );
  }
}

export default Result;

const Line = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding: 15px;
  color: rgba(30, 58, 138, 1);
`;

export const ResultInfo = styled.div`
  height: auto;
  color: rgba(81, 81, 81, 1);
  font-size: 16px;
  font-weight: 700;
  padding: 10px;
  padding-top: 3%;
  padding-bottom: 5%;
  li {
    margin-bottom: 3%; 
  }
`;

export const Image = styled.div`
  width: 200px;
  height: 200px;
`;

export const ResultDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding : 60px 100px 100px 100px;
  color: rgba(81, 81, 81, 1);
  span {
    border: 1px solid rgba(81, 81, 81, 1);
    border-radius: 20px;
    padding: 10px 20px 10px 20px;
    font-size: 16px;
    font-weight: 700;
  }
`;