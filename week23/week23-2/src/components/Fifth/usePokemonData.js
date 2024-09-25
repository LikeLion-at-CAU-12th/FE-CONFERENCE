import { useState, useEffect } from 'react';

const usePokemonData = (pokemonName) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!pokemonName) return;

    const fetchPokemonData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const result = await response.json();

        console.log(`[ ${pokemonName}에 대한 데이터 ]`);
        console.log(result);
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, [pokemonName]);

  return { data, loading, error };
};

export default usePokemonData;
