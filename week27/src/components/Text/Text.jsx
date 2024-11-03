import React from 'react';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { MdContentCopy } from 'react-icons/md';
import styled from 'styled-components';

const Text = () => {
  return (
    <Container>
      <TitleBar>
        <Title>여기서 나가려 합니다.</Title>
        <Icons>
          <HiOutlinePencilAlt />
          <MdContentCopy />
        </Icons>
      </TitleBar>
      <Content>
        여기서 나가려 합니다. 00이를 더 이상 못 보겠습니다. 00이가 남자로 보입니다. 그리고 그 남자를 사랑하게 됐습니다. 이뤄질 수 없다는 걸 알기에 00이를 사랑하는 심장을 찢어내려 합니다. 팬덤명, 머글분들 00이를 아껴주세요. 그러나 조심하십시오. 저처럼 죽을 만큼 사랑하게 되면 가슴이 찢어지는 고통을 보게될 겁니다. 그와 이루어질 수 없다는 걸 알기에 눈물만 흘리다 결국 그 웅덩이 속으로 가라앉게 될 겁니다
      </Content>
    </Container>
  );
};

export default Text;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FBFBFB;
  border-radius: 10px;
  max-width: 400px;
  padding: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  // width : 95%;
  border-bottom: 1px solid black;
  padding-bottom : 8px;
  margin-bottom : 8px;
`;

const Title = styled.h1`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`;

const Icons = styled.div`
  display: flex;
  gap: 8px;
  color: #6b6b6b;
`;

const Content = styled.div`
  font-size: 12px;
  color: #333;
  line-height: 1.4;
  text-align: left;
`;
