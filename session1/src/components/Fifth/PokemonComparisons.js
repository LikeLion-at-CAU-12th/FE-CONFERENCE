import React, { useState } from 'react';

import usePokemonData from './usePokemonData';
import PokemonStats from './PokemonStats';
import withLoading from './withLoading';

import styled from 'styled-components';

const PokemonStatsWithLoading = withLoading(PokemonStats);

const PokemonComparison = () => {
  const [pokemon1, setPokemon1] = useState('');
  const [pokemon2, setPokemon2] = useState('');
  const [search1, setSearch1] = useState('');
  const [search2, setSearch2] = useState('');

  const { data: data1, loading: loading1, error: error1 } = usePokemonData(search1);
  const { data: data2, loading: loading2, error: error2 } = usePokemonData(search2);

  // 포켓몬 1에 대한 검색 
  const handleSearch1 = () => {
    if (!pokemon1) {
      alert('Please enter a valid Pokémon name for the first Pokémon.');
      return;
    }
    setSearch1(pokemon1.toLowerCase());
  };

  // 포켓몬 2에 대한 검색 
  const handleSearch2 = () => {
    if (!pokemon2) {
      alert('Please enter a valid Pokémon name for the second Pokémon.');
      return;
    }
    setSearch2(pokemon2.toLowerCase());
  };

  // 에러가 발생한 경우(포켓몬을 찾지 못한 경우) alert 띄우기
  if (error1) alert(`Error: ${pokemon1} not found`);
  if (error2) alert(`Error: ${pokemon2} not found`);

  return (
    <Wrapper>
         <Title>Compare Pokémon Stats</Title>

         <Input>
         <input
            type="text"
            value={pokemon1}
            onChange={(e) => setPokemon1(e.target.value)}
            placeholder="Enter first Pokémon"
         />
         <button onClick={handleSearch1}>Search</button>

         <input
            type="text"
            value={pokemon2}
            onChange={(e) => setPokemon2(e.target.value)}
            placeholder="Enter second Pokémon"
         />
         <button onClick={handleSearch2}>Search</button>
         </Input>

         <div style={{ display: 'flex', justifyContent: 'space-around' }}>
         <div>
            {search1 && (
               <PokemonStatsWithLoading loading={loading1} pokemon={data1} />
            )}
         </div>
         <div>
            {search2 && (
               <PokemonStatsWithLoading loading={loading2} pokemon={data2} />
            )}
         </div>
         </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
   margin: 0 auto;
   padding: 20px;
   height: 100vh;
   width: 50vw;

   background-color: #f0f0f0;
`;

const Title = styled.h1`
   text-align: center;
`;

const Input = styled.div`
   display: flex;
   justify-content: space-around;
`;

export default PokemonComparison;
