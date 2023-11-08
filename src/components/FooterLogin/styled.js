import styled from 'styled-components';

export const FooterTag = styled.footer`
  background-color: #1c1818;
  color: white;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.7px);
  -webkit-backdrop-filter: blur(4.7px);
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;
export const ContainerSuperior = styled.div`
  padding: 40px 0;
  display: flex;
  justify-content: space-around;

  img{
    width: 15%;
    object-fit: contain;
  }
`;
export const ContainerInferior = styled.div`
  padding: 20px 0;
  border-top: 1px solid beige;
  text-align: center;
`;
export const ContainerInfos = styled.div``;
export const ContainerInfosSociais = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
`;
export const ContainerSociais = styled.div`
  display: flex;
  gap: 15px;

  img{
    width: 20%;
    cursor: pointer;
  }
`;
export const PTagContact = styled.p`
    margin-top: 5px;
`;
export const TitleInfos = styled.h3`
  color: beige;
  margin-bottom: 20px;
`;
