import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import Clients from './Clients';

const Container = styled.div`
  padding-top: 88px;
`;

const Content = () => {
  return (
    <Container>
      <Banner />
      <Clients />
    </Container>
  );
};

export default Content;
