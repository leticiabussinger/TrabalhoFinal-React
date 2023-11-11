import { api } from '../../api/api';
import React from 'react';
import {
  CartProductTitle,
  Container,
  Product,
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
        {pedidos.length > 0 ? <h1>Pedidos</h1> : <h2 style={{ textAlign: "center", width: "100%", marginTop: "50px" }}>Não há pedidos</h2>}

      </CartProductTitle>
      {pedidos &&
        pedidos.map((p) => {
          return (
            <>
              <Product>
                <OrderProduct product={p} idx={p.id} />
              </Product>
            </>
          );
        })}
    </Container>
  );
};

export default OrderPage;
