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
  ContainerQuantityValor,
  ContainerTitle,
  ContainerButtonQuantity,
  ContainerInfoAddCart,
} from './styled';
import { api } from '../../api/api';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const ProductPage = () => {
  const [quantity, setQuantity] = React.useState(1);
  const { id } = useParams();
  const [produto, setProduto] = React.useState(null);
  const [userCarrinho, setUserCarrinho] = React.useState([]);
  const [itemInCart, setItemInCart] = React.useState(null);
  const { userLogado } = React.useContext(UserContext);
  const navigate = useNavigate();
  const [addMessage, setAddMessage] = React.useState(false);

  const getProduto = async () => {
    const response = await api.get(`/produtos/${id}`);
    setProduto(response.data);
  };

  const findCart = (p) => {
    return p.id == id;
  };
  const setItemInCartFunction = () => {
    if (userCarrinho != undefined) {
      const itemInCartFind = userCarrinho.find(findCart);
      setItemInCart(itemInCartFind);
    }
  };

  React.useEffect(() => {
    getProduto();
    if (userLogado != null) {
      api
        .get(`/usuarios/${userLogado.id}`)
        .then((r) => {
          setUserCarrinho(r.data.carrinho);
        })
        .catch((e) => alert(e));
    }
  }, [userLogado]);

  React.useEffect(() => {
    setItemInCartFunction();
    console.log(userCarrinho);
  }, [userCarrinho]);

  const addToCart = () => {
    setAddMessage(true);
    setTimeout(() => {
      setAddMessage(false);
    }, 1500);
  };

  const handleCarrinho = () => {
    if (userLogado != null) {
      if (itemInCart) {
        console.log(itemInCart);
        if (quantity != itemInCart.quantidade) {
          const newCartAdd = userCarrinho.filter((p) => p.id != itemInCart.id);
          api.patch(`/usuarios/${userLogado.id}`, {
            carrinho: [
              ...newCartAdd,
              { id: itemInCart.id, quantidade: quantity },
            ],
          });
        }
        addToCart();
      } else {
        console.log(itemInCart);
        api.patch(`/usuarios/${userLogado.id}`, {
          carrinho: [...userCarrinho, { id: Number(id), quantidade: quantity }],
        });
        addToCart();
      }
    } else {
      navigate('/login');
    }
  };

  if (produto == null) return <Container />;
  return (
    <Container>
      <ContainerProduct>
        <ImgProduct src={produto.imgUrl} alt={produto.nome} />
        <ContainerProductInfos>
          <ContainerTitle>
            <h2>{produto.nome}</h2>
            <p>Vendido e entregue por SerraDecor</p>
          </ContainerTitle>
          <TagPValorDesconto>
            R$ {(produto.preco * 0.95).toFixed(2)}
          </TagPValorDesconto>
          <ContainerQuantityValor>
            <ContainerButtonQuantity>
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
                      if (q < produto.quantidade) {
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
            </ContainerButtonQuantity>
            <div>
              <TagPValor>à vista no cartão ou Pix (5% OFF)</TagPValor>
              <TagPValor>ou R$ {produto.preco} em 10x sem juros</TagPValor>
            </div>
          </ContainerQuantityValor>
          <ContainerBuy>
            <ButtonBuy onClick={handleCarrinho}>
              Adicionar ao Carrinho
            </ButtonBuy>
          </ContainerBuy>
          {addMessage && (
            <ContainerInfoAddCart>
              Produto adicionado ao carrinho
            </ContainerInfoAddCart>
          )}
        </ContainerProductInfos>
      </ContainerProduct>
      <ContainerProductDetails>
        <h3>Descrição</h3>
        <p>{produto.descricao}</p>
      </ContainerProductDetails>
    </Container>
  );
};

export default ProductPage;
