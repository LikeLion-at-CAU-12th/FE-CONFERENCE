import React, { useState } from "react";
import styled from "styled-components";
import useFetch from "../hook/useFetch";

const baseURL = "https://pokeapi.co/api/v2";

const RandomPokemon = () => {
  const [randomId, setRandomId] = useState(null);
  const [fetchRange, setFetchRange] = useState([1, 1]);

  const handleFetchRandomPokemon = () => {
    alert("정말 마음에 안 드시나요?");
    const randomPokemonId = Math.floor(Math.random() * 151) + 1;
    setFetchRange([randomPokemonId, randomPokemonId]);
    setRandomId(randomPokemonId);
  };

  const { data, loading, error } = useFetch(baseURL, fetchRange[0], fetchRange[1]);

  return (
    <Container>
      {loading && <LoadingText>Loading...</LoadingText>}
      {error && <ErrorText>Error: {error.message}</ErrorText>}

      {data && data.length > 0 && (
        <div>
          <PokemonImage
            src={data[0].imgData.sprites.front_default}
            alt={data[0].speciesData.name}
          />
          <PokemonName>{data[0].speciesData.name}</PokemonName>
        </div>
      )}
       <Button onClick={handleFetchRandomPokemon}>마음에 안 들어..</Button>
    </Container>
  );
};

export default RandomPokemon;

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #45a049;
  }
`;

const PokemonName = styled.h2`
  text-transform: uppercase;
  color: #333;
`;

const PokemonImage = styled.img`
  width: 300px;
  height: 300px;
`;

const ErrorText = styled.p`
  color: red;
`;

const LoadingText = styled.p`
  color: #999;
`;