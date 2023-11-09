import React from 'react';
export const CartContext = React.createContext(0);
import { api } from '../api/api';

export const CartProvider = ({ children }) => {
  const [cartItensContext, setCartItensContext] = React.useState([]);
  const [cartItensContextUnique, setCartItensContextUnique] = React.useState(
    [],
  );
  const [cartValue, setCartValue] = React.useState(0);
  const [deletedItem, setDeletedItem] = React.useState(false);

  const sCIC = (x) => {
    setCartItensContext(x);
  };
  const renderWhenDeleted = () => {
    setDeletedItem((dI) => !dI);
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
    if (cartItensContextUnique != null && cartItensContextUnique.length > 0) {
      const promises = cartItensContextUnique.map(async (i) => {
        return api.get(`/produtos/${i.id}`).then((r) => {
          return r.data.preco * i.quantidade;
        });
      });

      Promise.all(promises).then((results) => {
        const total = results.reduce((acc, current) => acc + current, 0);
        setCartValue(total);
      });
    }
  }, [cartItensContextUnique]);

  return (
    <CartContext.Provider
      value={{
        cartItensContext,
        sCIC,
        cartValue,
        renderWhenDeleted,
        deletedItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
