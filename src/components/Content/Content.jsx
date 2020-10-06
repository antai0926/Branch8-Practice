import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import Clients from './Clients';
import Services from './Services';
import MediaAttention from './MediaAttention';

const Container = styled.div`
  padding-top: 88px;
  @media (max-width: 768px) {
    padding-top: 73px;
  }
`;

const Content = () => {
  return (
    <Container>
      <Banner />
      <Clients />
      <Services />
      <MediaAttention />
    </Container>
  );
};

export default Content;
