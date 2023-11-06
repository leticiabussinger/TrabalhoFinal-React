import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: 80%;
  margin: 137px auto 0 auto;
  /* min-height: calc(100vh - 251px -137px ); */
  min-height: calc(100vh - 251px - 137px);
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
    p{
      font-size: 12px;
    }
  }
`;

export const ValorTotal = styled.span`
  font-size: 28px;
`;

export const ContainerFinishBuy = styled.div`
  display: flex;
  flex-direction: column;
  background: grey;
  height: max-content;
  padding: 20px;
  gap: 20px;
  width: 35%;
  border-radius: 6px;
`;
export const ButtonBuy = styled.button`
  width: 100%;
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
