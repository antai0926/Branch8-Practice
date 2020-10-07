import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 0 60px 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  background-color: #dde7ed;
  font-family: roboto-bold, roboto, sans-serif;
`;
export const Title = styled.div`
  color: black;
  font-family: roboto-bold, roboto, sans-serif;
  font-weight: 700;
  font-size: 23px;
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: ${(props) => (props.reverse ? 'wrap-reverse' : 'wrap')};
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding: 0 10px;
  @media (max-width: 1040px) {
    gap: 20px;
  }
`;
export const Element = styled.div``;
export const Img = styled.img`
  @media (max-width: 400px) {
    width: 95vw;
  }
`;
export const ElTitle = styled.div`
  color: #292929;
  font-size: 23px;
  margin-bottom: 10px;
  @media (max-width: 938px) {
    text-align: center;
  }
`;
export const Description = styled.div`
  color: black;
  font-size: 16px;
`;
