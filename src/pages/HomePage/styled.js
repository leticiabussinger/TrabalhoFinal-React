import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 177px auto 0 auto;
  min-height: calc(100vh - 251px - 137px); 
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3{
    font-size: 28px;
    font-weight: lighter;
    margin-bottom: 40px;
    color: #f2e5c0;
    padding: 10px;
  }
  img{
    width: 100%;
    background-color: #1e1e1e;
    border-radius: 30px;
    border: 0.5px solid #f2e5c0;
    margin-bottom: 70px;
  }

`;

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  color: white;
  gap: 0;

  p{
    text-align: center;
  }
`;

export const ContainerBestSellers = styled.div`
    width: 100%;
    
    img{
    width: 100%;
    background-color: #1e1e1e;
    border-radius: 0;
    border: none;
    margin-bottom: 0px;
    }

    p{
        font-size: 15px;
    }
  
`;