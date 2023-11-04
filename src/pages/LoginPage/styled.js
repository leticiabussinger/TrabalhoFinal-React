import styled from 'styled-components';
import FundoLogin from '../../assets/img/fundoLogin2.png';

export const FundoImg = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  justify-content: center;
  background-color: #292020;
  background-image: url(${FundoLogin});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
`;
export const ContainerLogin = styled.div`
  width: 50%;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.28);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.7px);
  -webkit-backdrop-filter: blur(4.7px);
`;
export const ButtonTag = styled.button``;
