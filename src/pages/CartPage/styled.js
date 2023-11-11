import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: aliceblue;
  padding-top: 4%;
  width: 80%;
  margin: 137px auto 0 auto;
  min-height: calc(100vh - 251px - 137px);
  
  
  
`;
export const CartProductTitle = styled.div`
  display: flex;
  border-radius: 2px;
  padding-bottom: 3%;
  h1{
    font-weight: 500;
  }
`;
export const Linha = styled.hr`
  border: 1px solid #6d6d6f;
  border-radius: 2px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Product = styled.div`
  width: 60%;
  height: auto;
  padding-bottom: 2%;  
`;
export const ContainerFinishBuy = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #232426;
  height: max-content;
  padding: 20px;
  margin-top: 6%;
  gap: 20px;
  min-width: 25%;
  border-radius: 6px;
  border: solid #6d6d6f 2px;
`;

export const ContainerSubtotalFrete = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 16px;
`;
export const ContainerTotal = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 20px;
  div {
    text-align: end;
    p {
      font-size: 12px;
    }
  }
`;

export const ValorTotal = styled.span`
  font-size: 28px;
`;

export const ButtonBuy = styled.button`
  width: 100%;
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
