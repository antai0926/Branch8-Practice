import styled from 'styled-components';

export const BannerContainer = styled.div`
  height: 475px;
  background-color: #4cb78c;
  position: relative;
  @media (max-width: 1040px) {
    height: 700px;
  }
`;
export const BannerBackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const CardsContainer = styled.div`
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
export const EcommerceCard = styled.div`
  font-family: roboto-bold, roboto, sans-serif;
  color: white;
  @media (max-width: 420px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
export const Title = styled.h1`
  font-size: 38px;
  font-weight: 900;
  text-shadow: rgba(0, 0, 0, 0.4) 0px 4px 5px;
  @media (max-width: 420px) {
    width: 95vw;
  }
`;
export const Description = styled.p`
  font-size: 20px;
  font-weight: 300;
`;
export const LearnMoreBtn = styled.div`
  background-color: rgb(8, 20, 35);
  border-radius: 3px;
  width: 142px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.6);
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #d1e0eb;
    cursor: pointer;
    a {
      color: black;
      text-decoration: none;
    }
  }
  @media (max-width: 1040px) {
    margin-top: 50px;
  }
  @media (max-width: 420px) {
    margin-top: 30px;
  }
`;
export const LernMoreText = styled.a`
  color: white;
  font-weight: 100;
  text-decoration: none;
`;
export const GrantImg = styled.img`
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
