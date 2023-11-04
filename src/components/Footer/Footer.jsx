import React from 'react';
import {
  Container,
  ContainerInferior,
  ContainerInfos,
  ContainerSociais,
  ContainerSuperior,
  FooterTag,
  PTagContact,
  PTagSiteMap,
  TitleInfos,
} from './styled';

const Footer = () => {
  return (
    <FooterTag>
      <Container>
        <ContainerSuperior>
          <p>Imagem Logo</p>
          <ContainerInfos>
            <TitleInfos>Title</TitleInfos>
            <PTagSiteMap>Infos</PTagSiteMap>
            <PTagSiteMap>Infos</PTagSiteMap>
            <PTagSiteMap>Infos</PTagSiteMap>
            <PTagSiteMap>Infos</PTagSiteMap>
            <PTagSiteMap>Infos</PTagSiteMap>
          </ContainerInfos>
          <ContainerInfos>
            <TitleInfos>Title</TitleInfos>
            <PTagContact>Infos</PTagContact>
            <PTagContact>Infos</PTagContact>
            <PTagContact>Infos</PTagContact>
            <PTagContact>Infos</PTagContact>
            <PTagContact>Infos</PTagContact>
          </ContainerInfos>
          <ContainerInfos>
            <TitleInfos>Title</TitleInfos>
            <ContainerSociais>
              <p>Inf</p>
              <p>ASD</p>
              <p>ASD</p>
              <p>ASD</p>
              <p>ASD</p>
            </ContainerSociais>
          </ContainerInfos>
        </ContainerSuperior>
        <ContainerInferior>
          <p>Copyright Direitos Reservados</p>
        </ContainerInferior>
      </Container>
    </FooterTag>
  );
};

export default Footer;
