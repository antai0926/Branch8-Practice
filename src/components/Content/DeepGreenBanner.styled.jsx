import styled from 'styled-components';

export const DeepGreenContainer = styled.div`
  background-color: #3e5c50;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
  justify-contents: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: ${(props) => props.paddingBottom};
`;
export const Title = styled.div`
  color: white;
  font-family: roboto-bold, roboto, sans-serif;
  font-weight: 700;
  font-size: 23px;
  @media (max-width: 550px) {
    margin-bottom: 10px;
  }
`;
export const ClientsContainer = styled.div`
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
  @media (max-width: 550px) {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
    column-gap: 10px;
    row-gap: 0;
    padding-bottom: 30px;
  }
`;
export const ClientImage = styled.div`
  display: flex;
  justify-content: center;
`;
