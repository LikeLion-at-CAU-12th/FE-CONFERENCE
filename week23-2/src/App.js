import React from "react";
import styled from "styled-components";
import RandomPokemon from "./components/RandomPokemon";

const App = () => {
  return (
    <AppContainer>
      <Title>세상이 흉흉하니 포켓몬 하나를 데려가렴 !</Title>
      <RandomPokemon />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
  min-height: 100vh;
`;

const Title = styled.h1`
  // font-family: 'SBAggroB';
  // src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff') format('woff');
  // font-weight: normal;
  // font-style: normal;
  font-family: 'CookieRun-Regular';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/CookieRun-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
`;