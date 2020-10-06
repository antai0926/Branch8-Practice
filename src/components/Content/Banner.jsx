import React from 'react';
import styled from 'styled-components';

import BannerBackImage from '../../assets/img/banner-backImg.webp';
import GrantImage from '../../assets/img/D-BizGrantImg.webp';

const Banner = () => {
  const BannerContainer = styled.div`
    height: 475px;
    background-color: #4cb78c;
    position: relative;
    @media (max-width: 1040px) {
      height: 700px;
    }
  `;
  const BannerBackgroundImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;
  const CardsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 50px;
    position: absolute;
    top: 0;
    left: 0;
    @media (max-width: 1040px) {
      flex-direction: column;
    }
  `;
  const EcommerceCard = styled.div`
    font-family: roboto-bold, roboto, sans-serif;
    color: white;
    @media (max-width: 420px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  `;
  const Title = styled.h1`
    font-size: 38px;
    font-weight: 900;
    text-shadow: rgba(0, 0, 0, 0.4) 0px 4px 5px;
    @media (max-width: 420px) {
      width: 95vw;
    }
  `;
  const Description = styled.p`
    font-size: 20px;
    font-weight: 300;
  `;
  const LearnMoreBtn = styled.div`
    background-color: rgb(8, 20, 35);
    border-radius: 3px;
    width: 142px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    @media (max-width: 1040px) {
      margin-top: 50px;
    }
    @media (max-width: 420px) {
      margin-top: 30px;
    }
  `;
  const LernMoreText = styled.a`
    color: white;
    font-weight: 100;
    text-decoration: none;
  `;
  const GrantImg = styled.img`
    @media (max-width: 1040px) {
      width: 60vw;
    }
    @media (max-width: 678px) {
      width: 80vw;
    }
    @media (max-width: 420px) {
      width: 95vw;
    }
  `;
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
