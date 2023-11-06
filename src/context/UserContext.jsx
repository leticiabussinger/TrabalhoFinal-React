import React from "react";

export const UserContext = React.createContext(0);

export const UserProvider = ({ children }) => {
  const [userLogado, setUserLogado] = React.useState("");
  return (
    <UserContext.Provider value={{ userLogado, setUserLogado }}>
      {children}
    </UserContext.Provider>
  );
};
