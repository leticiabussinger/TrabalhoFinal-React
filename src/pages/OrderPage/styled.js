import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: aliceblue;
  padding-top: 6%;
  width: 80%;
  margin: 100px auto 0 auto;
  min-height: calc(100vh - 251px - 137px);
`;
export const CartProductTitle = styled.div`
   display: flex;
    border-radius: 2px;
    padding-left: 2%;
    padding-bottom: 1%;
  h1{
    font-weight: 500;
  }
`;
export const Linha = styled.hr`
  border: 1px solid #6d6d6f;
  border-radius: 2px;
`;

export const Product = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 2%;
  border: 2px solid #6d6d6f;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 2%;
  margin-top: 2%;

  h1{
    font-size: 26px;
  }
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

export const OrderDetail = styled.div`
  padding-bottom: 2%;
`;

export const Total = styled.div`
  display: flex;
  justify-content: end;
`;



