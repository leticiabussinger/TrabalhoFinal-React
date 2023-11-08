import React from 'react';
import {
  ContainerProductInfos,
  ContainerProduct,
  ImgProduct,
  TagPValor,
  ContainerQuantity,
  ContainerBuy,
  TagPValorDesconto,
  TagPValorParcelado,
} from './styled';

const OrderProduct = ({ product }) => {
  return (
    <ContainerProduct>
      {product.itens.map((e) => {
        return (
          <>
            <ContainerProduct>
              <ImgProduct src={e.imgUrl} alt={e.nome} />
              <ContainerProductInfos>
                <div>
                  <h2>{e.nome}</h2>
                  <p>Vendido e entregue por SerraDecor</p>
                </div>
                <div>
                  <TagPValorDesconto>R$ {e.preco.toFixed(2)}</TagPValorDesconto>
                  <TagPValor>à vista no cartão ou Pix (5% OFF)</TagPValor>
                  <TagPValorParcelado>
                    ou 10x de R$ {e.preco.toFixed(2)} sem juros
                  </TagPValorParcelado>
                </div>
              </ContainerProductInfos>
            </ContainerProduct>
          </>
        );
      })}
      <TagPValorDesconto>
        Valor Total do pedido: R$ {product.valorTotal}
      </TagPValorDesconto>
    </ContainerProduct>
  );
};

export default OrderProduct;
