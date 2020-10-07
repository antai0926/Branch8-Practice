import React from 'react';

import {
  DeepGreenContainer,
  Title,
  ClientsContainer,
  ClientImage,
} from './DeepGreenBanner.styled';

const DeepGreenBanner = (props) => {
  const { images, title, gap, paddingBottom } = props;

  return (
    <DeepGreenContainer gap={gap} paddingBottom={paddingBottom}>
      <Title>{title}</Title>
      <ClientsContainer>
        {images.map((image) => (
          <ClientImage key={image.src}>
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </ClientImage>
        ))}
      </ClientsContainer>
    </DeepGreenContainer>
  );
};

export default DeepGreenBanner;
