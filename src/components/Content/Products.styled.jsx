import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 40px 0;
`;
export const Cards = styled.div`
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
