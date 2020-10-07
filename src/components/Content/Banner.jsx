import React from 'react';
//Image
import BannerBackImage from '../../assets/img/banner-backImg.webp';
import GrantImage from '../../assets/img/D-BizGrantImg.webp';
//styled
import {
  BannerContainer,
  BannerBackgroundImg,
  CardsContainer,
  EcommerceCard,
  Title,
  Description,
  LearnMoreBtn,
  LernMoreText,
  GrantImg,
} from './Banner.styled';

const Banner = () => {
  return (
    <BannerContainer>
      <BannerBackgroundImg src={BannerBackImage} alt="Banner BackImage" />
      <CardsContainer>
        <EcommerceCard>
          <Title>
            E-Commerce
            <br />
            Technology Experts
          </Title>
          <Description>
            We build and manage e-commerce websites <br />
            for brands.
          </Description>
          <LearnMoreBtn>
            <LernMoreText href="#1">Learn More</LernMoreText>
          </LearnMoreBtn>
        </EcommerceCard>
        <GrantImg src={GrantImage} alt="Grant Image" />
      </CardsContainer>
    </BannerContainer>
  );
};

export default Banner;
