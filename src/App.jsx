import React from "react";
import { GlobalStyle } from "./global/globalStyle";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";


function App() {
  const [userLogado, setUserLogado] = React.useState();
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
