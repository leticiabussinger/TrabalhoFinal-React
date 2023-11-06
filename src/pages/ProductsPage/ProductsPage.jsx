import React from "react";
import Product from "../../components/Product/Product";
import { api } from "../../api/api";
import { Container, ContainerGrid } from "./styled";
import { useParams } from "react-router-dom";

const ProductsPage = () => {
  const [json, SetJson] = React.useState(null);
  const { categoria } = useParams();
  const [tipo, setTipo] = React.useState();

  const getProdutosCategoria = async () => {
    const response = await api.get(`produtos?categoria=${categoria}`);
    SetJson(response.data);
    console.log(json);
  };

  const getProdutosPesquisa = async () => {
    const response = await api.get(`produtos?nome_like=^${categoria}`);
    SetJson(response.data);
    console.log(json);
  };

  React.useEffect(() => {
    if (
      categoria == "sala-de-estar" ||
      categoria == "banheiro" ||
      categoria == "sala-de-jantar" ||
      categoria == "escritorio" ||
      categoria == "cozinha" ||
      categoria == "quarto"
    ) {
      getProdutosCategoria();
    } else {
      getProdutosPesquisa();
    }
  }, [categoria]);

  if (json == null) return <Container />;
  return (
    <Container>
      <ContainerGrid>
        {json.map((p) => {
          return (
            <>
              <Product product={p} />
            </>
          );
        })}
      </ContainerGrid>
    </Container>
  );
};

export default ProductsPage;
