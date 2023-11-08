import React from 'react';
export const CartContext = React.createContext(0);
import { api } from '../api/api';

export const CartProvider = ({ children }) => {
  const [cartItensContext, setCartItensContext] = React.useState([]);
  const [cartItensContextUnique, setCartItensContextUnique] = React.useState(
    [],
  );
  const [cartValue, setCartValue] = React.useState(0);

  const sCIC = (x) => {
    setCartItensContext(x);
  };

  const setUnique = () => {
    if (cartItensContext != null) {
      const objectMap = cartItensContext.reduce((map, object) => {
        map.set(object.id, object);
        return map;
      }, new Map());

      const uniqList = Array.from(objectMap, ([_, value]) => value);
      setCartItensContextUnique([...uniqList]);
    }
  };

  React.useEffect(() => {
    setUnique();
  }, [cartItensContext]);

  React.useEffect(() => {
    if (cartItensContextUnique != null)
      cartItensContextUnique.map((i) => {
        api.get(`/produtos/${i.id}`).then((r) => {
          setCartValue((v) => v + r.data.preco * i.quantidade);
        });
      });
  }, [cartItensContextUnique]);

  return (
    <CartContext.Provider value={{ cartItensContext, sCIC, cartValue }}>
      {children}
    </CartContext.Provider>
  );
};
