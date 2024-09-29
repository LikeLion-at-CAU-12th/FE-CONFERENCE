import React, { useState } from "react";
import useFetch from "./useFetch";
import styled from "styled-components";

const PokemonData = () => {
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(10);

  const baseURL = `https://pokeapi.co/api/v2`;

  // 데이터 패치의 Custom Hook
  const { data, loading, error } = useFetch(baseURL, start, end);

  console.log(data);

  const handleStartChange = (e) => setStart(parseInt(e.target.value, 10));
  const handleEndChange = (e) => setEnd(parseInt(e.target.value, 10));

  const renderPokemonList = () => {
    if (!data) return null;
    return data.map((pokemon, index) => (
      <CardBox>
        <PokemonImage
          src={pokemon.imgData.sprites.front_default}
          alt="Pokemon"
        />
        <CardeExplanation>
          <div>{pokemon.speciesData.names[2].name}</div>
          <div>No. {pokemon.speciesData.id}</div>
        </CardeExplanation>
      </CardBox>
    ));
  };

  return (
    <Container>
      <Filter>
        <label>
          Start ID:
          <input
            type="number"
            value={start}
            onChange={handleStartChange}
            min="1"
          />
        </label>
        <label>
          End ID:
          <input type="number" value={end} onChange={handleEndChange} min="1" />
        </label>
      </Filter>
      <ListContainer>{renderPokemonList()}</ListContainer>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
    </Container>
  );
};

export default PokemonData;

const Container = styled.div`
  p {
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
  }
`;

const Filter = styled.div`
  margin-bottom: 20px;

  input {
    margin-left: 10px;
    width: 80px;
  }
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 300px);
  row-gap: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

const PokemonImage = styled.img`
  width: 150px;
  height: 150px;
  background-color: #ececec;
  border-radius: 8px;
`;

const CardeExplanation = styled.div`
  width: 80px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;

const TypeBox = styled.div`
  background-color: ${(props) => props.color || "#fff"};
  text-align: center;
  width: 50px;
  border-radius: 4px;
  padding: 5px 10px;
  margin: 2px 0;
  color: #fff;
  font-weight: bold;
  text-transform: capitalize;
`;
