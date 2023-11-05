import React from 'react';
import Product from '../../components/Product/Product';
import { api } from '../../api/api';
import { Container, ContainerGrid } from './styled';

const ProductsPage = () => {
  const [json, SetJson] = React.useState(null);

  const getProduto = async () => {
    const response = await api.get('produtos');
    SetJson(response.data);
    console.log(json);
  };

  React.useEffect(() => {
    getProduto();
  }, []);

  if (json == null) return null;
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
