import styled from "styled-components";

export const ContainerProduct = styled.div`
  display: flex;
  flex:1;
  gap: 40px;
  height: max-content;
`;
export const ImgProduct = styled.img`
  width: 140px;
`;
export const ContainerProductInfos = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

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
  border: 1px solid #c69857;
  border-radius: 4px;
  width: max-content;
  height: max-content;
  background-color: #efefef;
  padding: 4px;
  input {
    border: none;
    width: 40px;
    outline: 0;
    text-align: center;
    background-color: #efefef;
    font-size: 16px;
    color: black;
    font-weight: bold;

  }
  button {
    border: none;
    border-radius: 4px;
    width: 30px;
    cursor: pointer;
    background-color: #efefef;
    outline: 0;
    font-size: 20px;
    padding: 4px;
    color: #c69857;
    font-weight: bold;
  }
  button:hover {
    background-color: #e5e5e5;
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

