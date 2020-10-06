import React from 'react';
import styled from 'styled-components';
import LaptopImg1 from '../../assets/img/service-laptop-1.webp';
import LaptopImg2 from '../../assets/img/service-laptop-2.webp';

const Services = () => {
  const Container = styled.div`
    padding: 40px 0 60px 0;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    background-color: #dde7ed;
    font-family: roboto-bold, roboto, sans-serif;
  `;
  const Title = styled.div`
    color: black;
    font-family: roboto-bold, roboto, sans-serif;
    font-weight: 700;
    font-size: 23px;
  `;
  const Row = styled.div`
    display: flex;
    flex-wrap: ${(props) => (props.reverse ? 'wrap-reverse' : 'wrap')};
    justify-content: center;
    align-items: center;
    gap: 100px;
    padding: 0 10px;
    @media (max-width: 1040px) {
      gap: 20px;
    }
  `;
  const Element = styled.div``;
  const Img = styled.img`
    @media (max-width: 400px) {
      width: 95vw;
    }
  `;
  const ElTitle = styled.div`
    color: #292929;
    font-size: 23px;
    margin-bottom: 10px;
    @media (max-width: 938px) {
      text-align: center;
    }
  `;
  const Description = styled.div`
    color: black;
    font-size: 16px;
  `;
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
            <br />
            commerce capabilities, platforms and systems.
          </Description>
        </Element>
      </Row>
      <Row reverse>
        <Element>
          <ElTitle>IT Implementation</ElTitle>
          <Description>
            We strategize, design, build and implement omni-channel B2C and B2B
            <br />
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
