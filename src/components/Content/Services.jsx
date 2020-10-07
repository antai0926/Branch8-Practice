import React from 'react';

import LaptopImg1 from '../../assets/img/service-laptop-1.webp';
import LaptopImg2 from '../../assets/img/service-laptop-2.webp';

import {
  Container,
  Row,
  Title,
  Element,
  Img,
  ElTitle,
  Description,
} from './Services.styled';

const Services = () => {
  return (
    <Container>
      <Row>
        <Title>Our Services</Title>
      </Row>
      <Row>
        <Element>
          <Img src={LaptopImg1} alt="LaptopImg1" />
        </Element>
        <Element>
          <ElTitle>Consulting</ElTitle>
          <Description>
            We strategize, design, build and implement omni-channel B2C and B2B
            commerce capabilities, platforms and systems.
          </Description>
        </Element>
      </Row>
      <Row reverse>
        <Element>
          <ElTitle>IT Implementation</ElTitle>
          <Description>
            We strategize, design, build and implement omni-channel B2C and B2B
            commerce capabilities, platforms and systems.
          </Description>
        </Element>
        <Element>
          <Img src={LaptopImg2} alt="LaptopImg2" />
        </Element>
      </Row>
    </Container>
  );
};

export default Services;
