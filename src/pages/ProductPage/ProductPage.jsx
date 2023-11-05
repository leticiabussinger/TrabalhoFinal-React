import React from 'react';
import {
  Container,
  ContainerProductInfos,
  ContainerProduct,
  ImgProduct,
  ContainerProductDetails,
  TagPValor,
  ContainerQuantity,
  ContainerBuy,
  ButtonBuy,
  TagPValorDesconto,
} from './styled';
import { api } from '../../api/api';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const [quantity, setQuantity] = React.useState(1);
  const { id } = useParams();
  const [json, SetJson] = React.useState(null);

  const getProduto = async () => {
    const response = await api.get(`/produtos/${id}`);
    SetJson(response.data);
  };

  React.useEffect(() => {
    getProduto();
  }, []);

  if (json == null) return null;
  return (
    <Container>
      <ContainerProduct>
        <ImgProduct src={json.imgUrl} alt={json.nome} />
        <ContainerProductInfos>
          <h2>{json.nome}</h2>
          <p>Vendido e entregue por SerraDecor</p>
          <TagPValorDesconto>
            R$ {(json.preco * 0.95).toFixed(2)}
          </TagPValorDesconto>
          <TagPValor>à vista no cartão ou Pix (5% OFF)</TagPValor>
          <TagPValor>ou R$ {json.preco} em 10x sem juros</TagPValor>
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
                    if (q < json.quantidade) {
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
            <ButtonBuy>Comprar</ButtonBuy>
          </ContainerBuy>
        </ContainerProductInfos>
      </ContainerProduct>
      <ContainerProductDetails>
        <h3>Descrição</h3>
        <p>{json.descricao}</p>
      </ContainerProductDetails>
    </Container>
  );
};

export default ProductPage;
