import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 197px auto 0 auto;
  min-height: calc(100vh - 251px -137px);
`;
export const ContainerProduct = styled.div`
  display: flex;
  gap: 40px;
  display: flex;
`;
export const ImgProduct = styled.img`
  width: 35%;
  border-radius: 20px;
  object-fit: contain;
`;
export const ContainerProductInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 60%;
  color: white;
  h2 {
    text-align: start;
    margin-bottom: 10px;
  }
`;
export const ContainerProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 65px 0 60px 0;
  gap: 30px;
  color: white;
  h3 {
    font-size: 24px;
    line-height: 28px;
  }
`;
export const ContainerQuantity = styled.div`
  display: flex;
  border: 1px solid #6d6d6f;
  border-radius: 4px;
  width: max-content;
  height: max-content;
  background-color: #232426;
  padding: 4px;
  input {
    border: none;
    width: 40px;
    text-align: center;
    background-color: #232426;
    font-size: 16px;
    color: #d9d9db;
    font-weight: bold;
  }
  button {
    border: none;
    border-radius: 4px;
    width: 30px;
    cursor: pointer;
    background-color: #232426;
    outline: 0;
    font-size: 20px;
    padding: 4px;
    color: #d9d9db;
    font-weight: bold;
  }
  button:hover {
    background-color: #3b3b3d;
  }
`;
export const TagPValorDesconto = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: end;
  margin: 15px 0 8px 0;
`;
export const TagPValor = styled.p`
  text-align: end;
  margin-bottom: 4px;
`;

export const ContainerBuy = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const ButtonBuy = styled.button`
  width: 45%;
  color: aliceblue;
  height: 41px;
  min-width: 180px;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #c69857;

  &:hover {
    background-color: #b1894e;
  }
`;

export const ContainerQuantityValor = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ContainerTitle = styled.div``;
export const ContainerButtonQuantity = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
`;

const textExpand = keyframes`
  0% { font-size: 0 }
  100% { font-size: inicial }
`;
export const ContainerInfoAddCart = styled.div`
  color: white;
  animation: ${textExpand} 0.5s ease forwards;
`;
