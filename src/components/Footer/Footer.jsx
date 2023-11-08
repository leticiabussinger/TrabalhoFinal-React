import React from 'react';
import {
  Container,
  ContainerInferior,
  ContainerInfos,
  ContainerInfosSociais,
  ContainerSociais,
  ContainerSuperior,
  FooterTag,
  PTagContact,
  TitleInfos,
} from './styled';
import Logo from '../../assets/img/logo.png';
import IconFacebook from '../../assets/img/facebook.png';
import IconTwitter from '../../assets/img/twitter.png';
import IconInstagram from '../../assets/img/instagram.png';

const Footer = () => {
  return (
    <FooterTag>
      <Container>
        <ContainerSuperior>
          <img src={Logo} alt="Logo empresa Serra Decor" />
          <ContainerInfos>
            <TitleInfos>Contato</TitleInfos>
            <PTagContact>(22) 99104-4962</PTagContact>
            <PTagContact>serradecor@gmail.com</PTagContact>
            <PTagContact>Avenida Vieira Souto - 136 - RJ</PTagContact>
          </ContainerInfos>
          <ContainerInfosSociais>
            <TitleInfos>Social</TitleInfos>
            <ContainerSociais>
              <img src={IconFacebook} alt="" />
              <img src={IconTwitter} alt="" />
              <img src={IconInstagram} alt="" />
            </ContainerSociais>
          </ContainerInfosSociais>
        </ContainerSuperior>
        <ContainerInferior>
          <p>©Copyright | Todos os direitos reservados</p>
        </ContainerInferior>
      </Container>
    </FooterTag>
  );
};

export default Footer;
