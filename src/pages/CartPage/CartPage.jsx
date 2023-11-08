import { api } from '../../api/api';
import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';
import {
  ButtonBuy,
  CartProductTitle,
  Container,
  ContainerFinishBuy,
  ContainerSubtotalFrete,
  ContainerTotal,
  Linha,
  Product,
  ValorTotal,
} from './styled';
import CartProduct from '../../components/CartProduct/CartProduct';
import { UserContext } from '../../context/UserContext';
import { CartContext } from '../../context/CartContext';

const CartPage = () => {
  const [cartItensIds, setCartItensIds] = React.useState(null);
  const [cartItens, setCartItens] = React.useState([]);
  const [cartItensRender, setCartItensRender] = React.useState([]);
  const [a, setA] = React.useState(false);
  const { userLogado } = React.useContext(UserContext);
  const { sCIC, cartValue } = React.useContext(CartContext);
  const navigate = useNavigate();

  const setItensInCartFunction = () => {
    if (cartItensIds != null) {
      console.log(cartItensIds);
      setCartItens([]);
      cartItensIds.map(async (i, aa) => {
        const response = await api.get(`/produtos/${i.id}`);
        setCartItens((p) => [...p, response.data]);
      });
    }
  };

  const finalizeOrder = () => {
    console.log(userLogado.id);
    api.post('/pedidos', {
      itens: [...cartItensRender],
      valorTotal: cartValue,
      idUser: userLogado.id,
    });
    api.patch(`/usuarios/${userLogado.id}`, {
      carrinho: [],
    });
    setTimeout(() => {
      navigate('/pedidos');
    }, 2000);
  };

  const setItensInCartRenderFunction = () => {
    const objectMap = cartItens.reduce((map, object) => {
      map.set(object.id, object);
      return map;
    }, new Map());

    const uniqList = Array.from(objectMap, ([_, value]) => value);
    setCartItensRender([...uniqList]);
  };

  React.useEffect(() => {
    if (userLogado != null) {
      api
        .get(`/usuarios/${userLogado.id}`)
        .then((r) => {
          setCartItensIds(r.data.carrinho);
          console.log(r.data.carrinho);
          sCIC(r.data.carrinho);
        })
        .catch((e) => alert(e));
    }
  }, [userLogado]);

  React.useEffect(() => {
    setItensInCartFunction();
  }, [cartItensIds]);

  React.useEffect(() => {
    setItensInCartRenderFunction();
  }, [cartItens]);

  React.useEffect(() => {
    console.log(cartItensIds);
  }, [a]);

  if (cartItens == null) return <Container />;
  return (
    <Container>
      <Product>
        <CartProductTitle>
          <h1>Carrinho</h1>
        </CartProductTitle>
        <Linha />
        {cartItensRender.map((i) => {
          return (
            <>
              <CartProduct
                key={i.id}
                product={i}
                qnt={cartItensIds.find(({ id }) => id == i.id)}
              />
              <Linha />
            </>
          );
        })}
        <Linha />
      </Product>
      <ContainerFinishBuy>
        <ContainerSubtotalFrete>
          <p>Subtotal</p>
          <p>{(cartValue * 0.95).toFixed(2)}</p>
        </ContainerSubtotalFrete>

        <ContainerSubtotalFrete>
          <p>Frete</p>
          <p>Grátis</p>
        </ContainerSubtotalFrete>

        <ContainerTotal>
          <p>Total</p>
          <div>
            <p>
              R$ <ValorTotal>{(cartValue * 0.95).toFixed(2)}</ValorTotal>
            </p>
            <p>à vista no cartão ou Pix (5% OFF)</p>
            <p>ou R${(cartValue / 10).toFixed(2)} em 10x sem juros</p>
          </div>
        </ContainerTotal>
        <ButtonBuy onClick={finalizeOrder}>Finalizar Compra</ButtonBuy>
      </ContainerFinishBuy>
    </Container>
  );
};

export default CartPage;
