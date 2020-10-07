import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

import MagentoImg from '../../assets/img/products/Magento.webp';
import ShopifyImg from '../../assets/img/products/Shopify.webp';
import OpenCartImg from '../../assets/img/products/opencart.webp';
import CowsquareImg from '../../assets/img/products/cowsqaure.webp';

const Products = () => {
  const cards = [
    {
      imgSrc: MagentoImg,
      imgAlt: 'MagentoImg',
      title: 'Magento',
      description: `We are a certified Magento 2 professional developer. Magento is a
          leading platform for open commerce innovation. Magento handles over
          US$100B in gross merchandise volume.`,
    },
    {
      imgSrc: ShopifyImg,
      imgAlt: 'ShopifyImg',
      title: 'Shopify',
      description: `The all-in-one commerce platform to start, run and grow a business. From 2016 to 2018, businesses on Shopify contributed US$183B in economic activity worldwide`,
    },
    {
      imgSrc: OpenCartImg,
      imgAlt: 'OpenCartImg',
      title: 'OpenCart',
      description: `The free and open source eCommerce platform. OpenCart empowers 342,000+ eCommerce entrepreneurs all over the world.`,
    },
    {
      imgSrc: CowsquareImg,
      imgAlt: 'CowsquareImg',
      title: 'Cowsquare CRM',
      description: (
        <p>
          CowSquare is a CRM system developed by Branch8.
          <br />
          <a href="https://www.cowsquare.com/">Find out more</a>
        </p>
      ),
    },
  ];
  const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
    padding: 40px 0;
  `;
  const Cards = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    gird- template-rows: auto;
    justify-items: center;
    gap: 30px;
    @media (max-width:930px){
      grid-template-columns: auto auto;
      gird- template-rows: auto auto;
    }
    @media (max-width:460px){
      grid-template-columns: auto;
      gird- template-rows: auto auto auto auto;
    }
  `;
  return (
    <Container>
      <Cards>
        {cards.map((card) => (
          <ProductCard
            key={card.title}
            imgSrc={card.imgSrc}
            imgAlt={card.imgAlt}
            title={card.title}
            description={card.description}
          />
        ))}
      </Cards>
    </Container>
  );
};

export default Products;
