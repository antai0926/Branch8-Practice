import React from 'react';
import styled from 'styled-components';

const Clients = () => {
  const DeepGreenContainer = styled.div`
    background-color: #3e5c50;
    display: flex;
    flex-direction: column;
  `;
  const Title = styled.h2`
    color: white;
    font-family: roboto-bold, roboto, sans-serif;
    font-weight: 800;
  `;
  return (
    <DeepGreenContainer>
      <Title>Clients</Title>
    </DeepGreenContainer>
  );
};

export default Clients;
