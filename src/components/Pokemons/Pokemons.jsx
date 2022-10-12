import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pokemon from '../Pokemon/Pokemon';
import Card from '../Card/Card';

const Pokemons = ({ loading, dataApi = [] }) => {
  const [detailsPok, setDetailsPok] = useState([]);

  // const creatPokemon = (results) => {
  //   // console.log('resilts', results);
  //   try {
  //     results.map((item, index) => {
  //       item.id = index + 1;
  //       // console.log(item);
  //       setDetailsPok(item);
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   // creatPokemon(dataApi);
  //   console.log('deretge', detailsPok);
  // }, []);
  // if (loading) {
  //   return <h2>...loading</h2>;
  // }
  return (
    <>
      <Wrapper>
        <ul>
          {dataApi.map((item) => {
            console.log(item);
            return (
              <li className="li-poks">
                <Pokemon dataPok={item.name} />
              </li>
            );
          })}
        </ul>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  background-color: blue;

  .ul-poks {
    list-style: none;
  }
  .li-poks {
    margin: 0.6rem;
    font-size: 0.7rem;
  }
`;

export default Pokemons;

//crrer projet vite
// api
// useeffect
// 50post
