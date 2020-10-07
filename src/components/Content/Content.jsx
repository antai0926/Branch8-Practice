import React from 'react';

import Banner from './Banner';
import Clients from './Clients';
import Services from './Services';
import MediaAttention from './MediaAttention';
import Products from './Products';
import PeopleSay from './PeopleSay';
import BackedBy from './BackedBy';

import { Container } from './Content.styled';

const Content = () => {
  return (
    <Container>
      <Banner />
      <Clients />
      <Services />
      <Products />
      <MediaAttention />
      <PeopleSay />
      <BackedBy />
    </Container>
  );
};

export default Content;
