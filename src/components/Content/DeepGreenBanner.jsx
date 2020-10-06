import React from 'react';
import styled from 'styled-components';

const DeepGreenBanner = (props) => {
  const { images, title } = props;
  const DeepGreenContainer = styled.div`
    background-color: #3e5c50;
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
    padding-top: 30px;
  `;
  const Title = styled.div`
    color: white;
    font-family: roboto-bold, roboto, sans-serif;
    font-weight: 800;
    font-size: 23px;
    @media (max-width: 460px) {
      margin-bottom: 10px;
    }
  `;
  const ClientsContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    grid-template-rows: auto;
    gap: 25px;
    align-items: center;
    @media (max-width: 1000px) {
      grid-template-columns: auto auto auto;
      grid-template-rows: auto auto;
      column-gap: 10px;
      row-gap: 0;
      padding-bottom: 30px;
    }
    @media (max-width: 460px) {
      grid-template-columns: auto auto;
      grid-template-rows: auto auto auto;
      column-gap: 10px;
      row-gap: 0;
      padding-bottom: 30px;
    }
  `;
  const ClientImage = styled.div``;
  return (
    <DeepGreenContainer>
      <Title>{title}</Title>
      <ClientsContainer>
        {images.map((image) => (
          <ClientImage>
            <img src={image.src} alt={image.alt} />
          </ClientImage>
        ))}
      </ClientsContainer>
    </DeepGreenContainer>
  );
};

export default DeepGreenBanner;
