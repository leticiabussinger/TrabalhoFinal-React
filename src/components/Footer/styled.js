import styled from 'styled-components';

export const FooterTag = styled.footer`
  background-color: #232426;
  color: white;
  border-top: 0.5px solid beige;
  margin-top: 50px;
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

  img {
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

  img {
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
