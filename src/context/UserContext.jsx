import React from 'react';
export const UserContext = React.createContext(0);

export const UserProvider = ({ children }) => {
  const [userLogado, setUserLogado] = React.useState(null);
  const userLocalStorageString = localStorage.getItem('userLogado');
  const userLocalStorageObg = JSON.parse(userLocalStorageString);

  React.useEffect(() => {
    if (userLocalStorageObg) {
      setUserLogado(userLocalStorageObg);
    }
  }, []);

  return (
    <UserContext.Provider value={{ userLogado, setUserLogado }}>
      {children}
    </UserContext.Provider>
  );
};
