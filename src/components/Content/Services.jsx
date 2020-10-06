import React from 'react';
import styled from 'styled-components';

const Services = () => {
  const Container = styled.div`
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #dde7ed;
  `;
  const Title = styled.div`
    color: black;
    font-family: roboto-bold, roboto, sans-serif;
    font-weight: 700;
    font-size: 23px;
  `;
  const Row = styled.div`
    display: flex;
    justify-content: center;
  `;
  const Element = styled.div``;
  return (
    <Container>
      <Row>
        <Title>Our Services</Title>
      </Row>
      <Row>
        <Element></Element>
        <Element></Element>
      </Row>
      <Row>
        <Element></Element>
        <Element></Element>
      </Row>
    </Container>
  );
};

export default Services;
