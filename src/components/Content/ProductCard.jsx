import React from 'react';

import {
  Card,
  CardImgContainer,
  CardTitle,
  Description,
} from './ProductCard.styled.jsx';

const ProductCard = (props) => {
  const { imgSrc, imgAlt, title, description } = props;

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
