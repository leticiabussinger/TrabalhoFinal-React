import React from 'react';
import {
  ContainerProductInfos,
  ContainerProduct,
  ImgProduct,
  TagPValor,
  TagPValorDesconto,
  TagPValorParcelado,
  Linha,
  ContainerDiv,
  CartProductTitle,
} from './styled';

const OrderProduct = ({ product, idx }) => {
  return (
    <ContainerProduct>
      <CartProductTitle>
        <h1>Pedido #B9X7{idx}</h1>
      </CartProductTitle>
      {product.itens.map((e) => {
        return (
          <>
            <ContainerProduct>
              <Linha />
              <ContainerDiv>
                <ImgProduct src={e.imgUrl} alt={e.nome} />
                <ContainerProductInfos>
                  <div>
                    <h2>{e.nome}</h2>
                    <p>Vendido e entregue por SerraDecor</p>
                  </div>
                  <div>
                    <TagPValorDesconto>R$ {(e.preco * 0.95).toFixed(2)}</TagPValorDesconto>
                    <TagPValor>à vista</TagPValor>
                  </div>
                </ContainerProductInfos>
              </ContainerDiv>
            </ContainerProduct>
          </>
        );
      })}
      <Linha />
      <TagPValorDesconto>
        Valor Total: R$ {(product.valorTotal * 0.95).toFixed(2)}
      </TagPValorDesconto>
    </ContainerProduct>
  );
};

export default OrderProduct;
