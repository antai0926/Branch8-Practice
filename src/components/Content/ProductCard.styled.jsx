import styled from 'styled-components';

export const Card = styled.div`
  dispaly: flex;
  flex-direction: column;
  align-items: center;
  width: 201px;
  @media (max-width: 460px) {
    width: 300px;
  }
  font-family: roboto-bold, roboto, sans-serif;
`;
export const CardImgContainer = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 83px;
    height: 71px;
  }
`;
export const CardTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 23px;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 25px 0;
`;
export const Description = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 16px;
`;
