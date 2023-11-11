import React from 'react';
import Logo from '../../assets/img/logoHeader.png';
import iconLupa from '../../assets/img/iconLupa.png';
import IconUser from '../../assets/img/iconUsuario.png';
import IconCart from '../../assets/img/iconCart.png';
import IconOrder from '../../assets/img/iconOrder.png';
import {
  ContainerBackgroundHeader,
  ContainerBackgroundSubHeader,
  ContainerHeader,
  ContainerSearchBar,
  ContainerSubHeader,
  ContainerUserCart,
  HeaderTag,
} from './styled';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const Header = () => {
  const { userLogado, deslogar } = React.useContext(UserContext);
  const [pesquisa, setPesquisa] = React.useState('');
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = React.useState(0);

  function search() {
    navigate(`/${pesquisa}`);
  }

  function searchEnterPress(event) {
    if (event.key === 'Enter') {
      search();
    }
  }

  const toLogin = () => {
    if (userLogado == null) {
      navigate('/login');
    }
  };

  const deslogarIcon = () => {
    toLogin();
    if (userLogado != null) {
      deslogar();
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    }
  };
  function validationSearch() {
    if (pesquisa != '') {
      search();
    }
  }
  return (
    <HeaderTag>
      <ContainerBackgroundHeader>
        <ContainerHeader>
          <img
            src={Logo}
            alt="Logo da empresa Serra Decor"
            onClick={() => {
              navigate('/');
            }}
          />
          <ContainerSearchBar>
            <input
              type="text"
              value={pesquisa}
              onChange={({ target }) => {
                setPesquisa(target.value);
              }}
              onKeyUp={searchEnterPress}
            />
            <img
              src={iconLupa}
              alt="Icone de lupa"
              onClick={validationSearch}
            />
          </ContainerSearchBar>
          <ContainerUserCart>
            <p style={{ cursor: 'pointer' }} onClick={toLogin}>
              {userLogado ? userLogado.nome : 'Login'}
            </p>
            <img onClick={deslogarIcon} src={IconUser} alt="Icone de usuario" />
            <img onClick={() => {
              if (userLogado == null) {
                navigate('/login');
              } else {
                navigate('/pedidos');
              }
            }} src={IconOrder} alt="Icone de pedido" />
            <img
              src={IconCart}
              alt="Icone de carrinho"
              onClick={() => {
                if (userLogado == null) {
                  navigate('/login');
                } else {
                  navigate('/finalizar-compra');
                }
              }}
            />
          </ContainerUserCart>
        </ContainerHeader>
      </ContainerBackgroundHeader>
      <ContainerBackgroundSubHeader>
        <ContainerSubHeader>
          <Link
            to={'/banheiro'}
            onClick={() => setActiveLink(1)}
            active={activeLink}
          >
            Banheiro
          </Link>
          <Link to={'/cozinha'} tabindex="1">
            Cozinha
          </Link>
          <Link to={'/escritorio'} tabindex="1">
            Escritório
          </Link>
          <Link to={'/quarto'} tabindex="1">
            Quarto
          </Link>
          <Link to={'/sala-de-estar'} tabindex="1">
            Sala de Estar
          </Link>
          <Link to={'/sala-de-jantar'} tabindex="1">
            Sala de Jantar
          </Link>
        </ContainerSubHeader>
      </ContainerBackgroundSubHeader>
    </HeaderTag>
  );
};

export default Header;
