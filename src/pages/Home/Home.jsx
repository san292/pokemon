import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pokemons from '../../components/Pokemons/Pokemons';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const FetchApi = async () => {
    setLoading(true);
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20');

    const data = await res.json();
    setData(data.results);
    setLoading(false);
  };

  useEffect(() => {
    FetchApi();
  }, []);
  if (loading) {
    return <h2>...loading</h2>;
  }
  return (
    <Container>
      <Pokemons dataApi={data} loading={loading} />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: auto;
  margin-top: 5rem;
  background-color: antiquewhite;
`;
export default Home;
