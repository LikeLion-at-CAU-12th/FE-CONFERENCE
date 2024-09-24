import React from "react";
import styled from "styled-components";
import RandomPokemon from "./components/RandomPokemon";

const App = () => {
  return (
    <AppContainer>
      <h1>세상이 흉흉하니 포켓몬 하나를 데려가렴 !</h1>
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
    font-family: 'HakgyoansimChilpanjiugaeTTF-B';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-5@1.0/HakgyoansimChilpanjiugaeTTF-B.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
`;