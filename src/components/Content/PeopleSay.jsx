import React from 'react';

import AlwinWonImg from '../../assets/img/about-us/alwinwon.webp';

import {
  Content,
  AvatarImg,
  Profile,
  Name,
  JobTitle,
} from './PeopleSay.styled';
import { Container, Title } from './Services.styled';

const PeopleSay = () => {
  return (
    <Container gap="20px">
      <Title>What People Say About Us</Title>
      <Content>
        Branch8 provides more than just normal support, but 24/7 hours support.
        We message and they are there to help on anything. Even tasks outside of
        their scope.
      </Content>
      <div>
        <AvatarImg src={AlwinWonImg} />
      </div>
      <Profile>
        <Name>Alwin Wong</Name>
        <JobTitle>
          Regional E-Commerce Manager at Francfranc Corporation
        </JobTitle>
      </Profile>
    </Container>
  );
};

export default PeopleSay;
