import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;
  margin: 137px auto 0 auto;
  min-height: calc(100vh - 251px - 137px); 

`;
export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  grid-gap: 40px;
`;
