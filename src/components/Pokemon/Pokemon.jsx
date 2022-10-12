import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
// import Card from '../Card/Card';

const Pokemon = (dataPok) => {
  console.log('dataPok', dataPok);
  return (
    <>
      <Wrapper>
        <h2>{dataPok}</h2>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .containerCard {
    box-sizing: border-box;
    width: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    margin: 0.2rem;
    background-color: #8ee7fb;
    color: #fff;
  }

  .container-img {
    width: 10rem;
  }
`;

export default Pokemon;
