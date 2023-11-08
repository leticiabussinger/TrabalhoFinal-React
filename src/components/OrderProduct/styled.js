import styled from 'styled-components';

export const ContainerProduct = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #6d6d6f;
  border-radius: 6px;
  flex: 1;
  height: max-content;
  padding: 1%;
`;
export const ImgProduct = styled.img`
  width: 100px;
  border-radius: 8px;
`;
export const ContainerProductInfos = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  font-size: 16px;
  h2 {
    font-size: 20px;
    text-align: start;
    margin-bottom: 10px;
  }
`;
export const ContainerProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0 60px 0;
  gap: 30px;
  h3 {
    font-size: 20px;
    line-height: 20px;
  }
`;
export const ContainerQuantity = styled.div`
  display: flex;
  border: 2px solid #6d6d6f;
  border-radius: 4px;
  width: max-content;
  height: max-content;
  background-color: #232426;
  padding: 4px;

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
  font-size: 20px;
  font-weight: bold;
  text-align: end;
  margin: 15px 0 8px 0;
`;
export const TagPValor = styled.p`
  text-align: end;
  margin-bottom: 4px;
`;
export const TagPValorParcelado = styled.p`
  flex: 1;
  text-align: end;
  margin-bottom: 4px;
`;

export const ContainerBuy = styled.div`
  margin-top: 20px;
`;
