import React from 'react';
import ProductCard from './ProductCard';

import MagentoImg from '../../assets/img/products/Magento.webp';
import ShopifyImg from '../../assets/img/products/Shopify.webp';
import OpenCartImg from '../../assets/img/products/opencart.webp';
import CowsquareImg from '../../assets/img/products/cowsqaure.webp';

import { Container, Cards } from './Products.styled';

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
