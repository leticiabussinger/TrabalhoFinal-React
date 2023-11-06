import React from "react";
import Lupa from "../../assets/img/lupa.png";
import {
  ContainerBackgroundHeader,
  ContainerBackgroundSubHeader,
  ContainerHeader,
  ContainerSearchBar,
  ContainerSubHeader,
  HeaderTag,
} from "./styled";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Header = () => {
  const { userLogado } = React.useContext(UserContext);
  const [pesquisa, setPesquisa] = React.useState("");
  const navigate = useNavigate();

  function search() {
    navigate(`/${pesquisa}`);
  }
  return (
    <HeaderTag>
      <ContainerBackgroundHeader>
        <ContainerHeader>
          <p>Logo</p>
          <ContainerSearchBar>
            <input
              type="text"
              value={pesquisa}
              onChange={({ target }) => {
                setPesquisa(target.value);
              }}
            />
            <img src={Lupa} alt="Icone de lupa" onClick={search} />
          </ContainerSearchBar>

          <p>{userLogado}</p>
        </ContainerHeader>
      </ContainerBackgroundHeader>
      <ContainerBackgroundSubHeader>
        <ContainerSubHeader>
          <Link to={"/banheiro"}>Banheiro</Link>
          <Link to={"/cozinha"}>Cozinha</Link>
          <Link to={"/escritorio"}>Escritório</Link>
          <Link to={"/quarto"}>Quarto</Link>
          <Link to={"/sala-de-estar"}>Sala de Estar</Link>
          <Link to={"/sala-de-jantar"}>Sala de Jantar</Link>
        </ContainerSubHeader>
      </ContainerBackgroundSubHeader>
    </HeaderTag>
  );
};

export default Header;
