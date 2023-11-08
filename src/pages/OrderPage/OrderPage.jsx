import { api } from '../../api/api';
import React from 'react';
import {
  CartProductTitle,
  Container,
  Linha,
  OrderDetail,
  Product,
  Total,
} from './styled';
import { UserContext } from '../../context/UserContext';
import OrderProduct from '../../components/OrderProduct/OrderProduct';

const OrderPage = () => {
  const [pedidos, SetPedidos] = React.useState(null);
  const { userLogado } = React.useContext(UserContext);

  const getPedidos = async () => {
    if (userLogado != null) {
      const response = await api.get(`/pedidos/?idUser=${userLogado.id}`);
      SetPedidos(response.data);
    }
  };

  React.useEffect(() => {
    getPedidos();
  }, []);

  if (pedidos == null) return <Container />;
  return (
    <Container>
      <CartProductTitle>
        <h1>Pedidos</h1>
      </CartProductTitle>
      {pedidos &&
        pedidos.map((p, i) => {
          return (
            <>
              <OrderProduct product={p} idx={i} />
            </>
          );
        })}
    </Container>
  );
};

export default OrderPage;
