import React from "react";
import { Container, ContainerInfos, ProductName } from "./styled";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { nome, preco, imgUrl, id, categoria } = product;
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => {
        navigate(`/${categoria}/produto/${id}`);
      }}
    >
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
