import React from 'react';
import styled from 'styled-components';

const ProductCard = (props) => {
  const { imgSrc, imgAlt, title, description } = props;
  const Card = styled.div`
    dispaly: flex;
    flex-direction: column;
    align-items: center;
    width: 201px;
    @media (max-width: 460px) {
      width: 300px;
    }
    font-family: roboto-bold, roboto, sans-serif;
  `;
  const CardImgContainer = styled.div`
    display: flex;
    justify-content: center;
    img {
      width: 83px;
      height: 71px;
    }
  `;
  const CardTitle = styled.div`
    display: flex;
    justify-content: center;
    font-size: 23px;
    font-weight: 700;
    letter-spacing: 0.08em;
    padding: 25px 0;
  `;
  const Description = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 16px;
  `;
  return (
    <Card>
      <CardImgContainer>
        <img src={imgSrc} alt={imgAlt} />
      </CardImgContainer>
      <CardTitle>{title}</CardTitle>
      <Description>{description}</Description>
    </Card>
  );
};

export default ProductCard;
