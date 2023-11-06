import { api } from "../../api/api";
import { useParams } from "react-router-dom";
import React from "react";
import {
  ButtonBuy,
  Container,
  ContainerFinishBuy,
  ContainerSubtotalFrete,
  ContainerTotal,
  ValorTotal,
} from "./styled";
import CartProduct from "../../components/CartProduct/CartProduct";

const CartPage = () => {
  const { id } = useParams();
  const [json, SetJson] = React.useState(null);

  const getProduto = async () => {
    const response = await api.get(`/produtos/${id}`);
    SetJson(response.data);
  };

  React.useEffect(() => {
    getProduto();
  }, []);

  if (json == null) return <Container />;
  return (
    <Container>
      {/* {json.map((p) => {
        <CartProduct product={p} />;
      })} */}
      <CartProduct product={json} />;
      <ContainerFinishBuy>
        <ContainerSubtotalFrete>
          <p>Subtotal</p>
          <p>R$1</p>
        </ContainerSubtotalFrete>

        <ContainerSubtotalFrete>
          <p>Frete</p>
          <p>Grátis</p>
        </ContainerSubtotalFrete>

        <ContainerTotal>
          <p>Total</p>
          <div>
            <p>
              R$ <ValorTotal>12121</ValorTotal>
            </p>
            <p>à vista no cartão ou Pix (5% OFF)</p>
            <p>ou R$ 2 em 10x sem juros</p>
          </div>
        </ContainerTotal>
        <ButtonBuy>Finalizar Compra</ButtonBuy>
      </ContainerFinishBuy>
    </Container>
  );
};

export default CartPage;
