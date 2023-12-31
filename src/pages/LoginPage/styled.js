import styled from 'styled-components';

export const FundoImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerLogin = styled.div`
  padding: 50px;
  width: 35%;
  margin: 0 auto 250px auto;
  font-size: 1.1rem;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.7px);
  -webkit-backdrop-filter: blur(4.7px);
`;
export const ButtonTag = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  border-radius: 4px;
  width: 100%;
  margin: 40px 0 20px;
  padding: 12px 0;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  background-color: #c69857;
  &:hover {
    background-color: #b1894e;
  }
`;
export const NoAccountP = styled.p`
  color: white;

  span {
    color: #c69859;
    cursor: pointer;
    font-weight: 700;
  }
`;

export const TitleForm = styled.h2`
  font-size: 30px;
  color: white;
  text-align: center;
  padding: 0 0 20px 0;
`;

export const LogoSite = styled.img`
  display: flex;
  margin: 40px auto 40px auto;
  cursor: pointer;
  width: 200px;
`;
