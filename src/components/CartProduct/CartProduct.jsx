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
  Delete,
} from './styled';
import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/UserContext';
import { api } from '../../api/api';
import iconExcluir from '../../assets/img/excluir.png';

const CartProduct = ({ product, qnt }) => {
  const { nome, imgUrl, quantidade, preco, id } = product;
  const [quantity, setQuantity] = React.useState(qnt.quantidade);
  const { cartItensContext } = React.useContext(CartContext);
  const { userLogado } = React.useContext(UserContext);

  const excluirItemCart = () => {
    const newCartRemove = cartItensContext.filter((i) => i.id != id);
    api.patch(`/usuarios/${userLogado.id}`, {
      carrinho: [...newCartRemove],
    });
  };

  return (
    <ContainerProduct>
      <ImgProduct src={imgUrl} alt={nome} />
      <ContainerProductInfos>
        <div>
          <h2>{nome}</h2>
          <p>Vendido e entregue por SerraDecor</p>
          <ContainerBuy>
            <ContainerQuantity>
              <p>Qtd: {quantity}</p>
            </ContainerQuantity>
          </ContainerBuy>
        </div>
        <div>
          <TagPValorDesconto>R$ {preco.toFixed(2)}</TagPValorDesconto>
          <TagPValor>à vista no cartão ou Pix (5% OFF)</TagPValor>
          <TagPValorParcelado>
            ou 10x de R$ {preco.toFixed(2)} sem juros
          </TagPValorParcelado>
        </div>
      </ContainerProductInfos>
      <Delete onClick={excluirItemCart}>
        <img src={iconExcluir} alt="icone de exclusão" />
      </Delete>
    </ContainerProduct>
  );
};

export default CartProduct;
