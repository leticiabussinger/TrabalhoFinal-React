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
  const { nome, imgUrl, preco, id } = product;
  const [quantity, setQuantity] = React.useState(0);
  const { cartItensContext, renderWhenDeleted } = React.useContext(CartContext);
  const { userLogado } = React.useContext(UserContext);

  React.useEffect(() => {
    if (qnt) setQuantity(qnt.quantidade);
  });

  const excluirItemCart = () => {
    const newCartRemove = cartItensContext.filter((i) => i.id != id);
    api
      .patch(`/usuarios/${userLogado.id}`, {
        carrinho: [...newCartRemove],
      })
      .then(() => {
        renderWhenDeleted();
      })
      .catch((error) => {
        console.error('Erro ao excluir o item do carrinho:', error);
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
          <TagPValorDesconto>R$ {(preco * 0.95).toFixed(2)}</TagPValorDesconto>
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
