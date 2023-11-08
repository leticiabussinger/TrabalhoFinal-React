import React from 'react';
export const UserContext = React.createContext(0);

export const UserProvider = ({ children }) => {
  const [userLogado, setUserLogado] = React.useState(null);

  const deslogar = () => {
    localStorage.setItem('userLogado', '');
  };

  React.useEffect(() => {
    const userLocalStorageString = localStorage.getItem('userLogado');
    if (userLocalStorageString != '') {
      const userLocalStorageObg = JSON.parse(userLocalStorageString);
      if (userLocalStorageObg) {
        setUserLogado(userLocalStorageObg);
      }
    } else {
      setUserLogado(null);
    }
  }, []);

  return (
    <UserContext.Provider value={{ userLogado, setUserLogado, deslogar }}>
      {children}
    </UserContext.Provider>
  );
};
