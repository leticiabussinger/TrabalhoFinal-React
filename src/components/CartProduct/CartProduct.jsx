import React from "react";
import {
  ContainerProductInfos,
  ContainerProduct,
  ImgProduct,
  TagPValor,
  ContainerQuantity,
  ContainerBuy,
  TagPValorDesconto,
  TagPValorParcelado,
} from "./styled";

const CartProduct = ({ product }) => {
  const { nome, imgUrl, quantidade, preco } = product;
  const [quantity, setQuantity] = React.useState(1);

  return (
    <ContainerProduct>
      <ImgProduct src={imgUrl} alt={nome} />
      <ContainerProductInfos>
        <div>
          <h2>{nome}</h2>
          <p>Vendido e entregue por SerraDecor</p>
          <ContainerBuy>
            <ContainerQuantity>
              <button
                onClick={() =>
                  setQuantity((q) => {
                    if (q > 1) {
                      return q - 1;
                    } else {
                      return q;
                    }
                  })
                }
              >
                -
              </button>
              <input type="number" value={quantity} disabled />
              <button
                onClick={() =>
                  setQuantity((q) => {
                    if (q < quantidade) {
                      return q + 1;
                    } else {
                      return q;
                    }
                  })
                }
              >
                +
              </button>
            </ContainerQuantity>
          </ContainerBuy>
        </div>
        <div>
          <TagPValorDesconto>
            R$ {(preco * 0.95 * quantity).toFixed(2)}
          </TagPValorDesconto>
          <TagPValor>à vista no cartão ou Pix (5% OFF)</TagPValor>
          <TagPValorParcelado>
            ou 10x de R$ {((preco * quantity) / 10).toFixed(2)} sem juros
          </TagPValorParcelado>
        </div>
      </ContainerProductInfos>
    </ContainerProduct>
  );
};

export default CartProduct;
