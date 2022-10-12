import React from 'react';
import Pokemon from '../../components/Pokemon/Pokemon';
import styled from 'styled-components';

const DetailsCard = () => {
  return (
    <>
      <Container>
        details
        <Pokemon />
      </Container>
    </>
  );
};
const Container = styled.div`
  margin-top: 5rem;
`;
export default DetailsCard;
