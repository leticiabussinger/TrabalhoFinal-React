import styled from 'styled-components';

export const ContainerProduct = styled.div`
  display: flex;
  flex: 1;
  gap: 40px;
  height: max-content;
  padding: 1%;
`;
export const ImgProduct = styled.img`
  width: 140px;
  border-radius: 8px;
`;
export const ContainerProductInfos = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  h2 {
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
    font-size: 24px;
    line-height: 28px;
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
  input {
    border: none;
    width: 40px;
    text-align: end;
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
export const TagPValorParcelado = styled.p`
  flex: 1;
  text-align: end;
  margin-bottom: 4px;
`;

export const ContainerBuy = styled.div`
  margin-top: 20px;
`;

export const Delete = styled.button`
  width: 6%;

  background: none;
  border: none;
  cursor: pointer;

  img {
    color: #3b3b3d;
    width: 24px;
    height: 24px;
  }

  img:hover {
    width: 26px;
    height: 26px;
  }
`;
