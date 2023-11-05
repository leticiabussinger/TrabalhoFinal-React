import React from 'react';
import { Container, ContainerInfos, ProductName } from './styled';

const Product = ({ product }) => {
  const { nome, preco, imgUrl } = product;
  return (
    <Container>
      <img src={imgUrl} alt={nome} />
      <ContainerInfos>
        <ProductName>{nome}</ProductName>
        <h3>R$ {(preco * 0.95).toFixed(2)}</h3>
        <p>à vista no cartão ou Pix</p>
        <p>10x de R$ {(preco / 10).toFixed(2)} sem juros</p>
      </ContainerInfos>
    </Container>
  );
};

export default Product;
