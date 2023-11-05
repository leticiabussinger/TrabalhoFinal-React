import React from 'react';
import { GlobalStyleLogin } from '../../global/globalStyle';
import Footer from '../../components/Footer/Footer';
import {
  ButtonTag,
  ContainerLogin,
  FundoImg,
  LogoSite,
  NoAccountP,
  TitleForm,
} from './styled';
import Input from '../../components/Input/Input';
import Logo from '../../assets/img/logo.png';
import { api } from '../../api/api';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    const response = await api.get(`/usuarios?email=${email}`);
    if (response.data.length != 0) {
      if (response.data[0].senha == senha) {
        navigate('/');
      }
    }
  };

  return (
    <>
      <GlobalStyleLogin />
      <FundoImg>
        <LogoSite src={Logo} alt="Logo do site" />
        <ContainerLogin>
          <TitleForm>Login</TitleForm>
          <form onSubmit={loginUser}>
            {email && (
              <h1 style={{ color: 'white' }}>Titulo Diferente no mieo</h1>
            )}
            <Input
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Input
              id="senha"
              label="Senha"
              value={senha}
              onChange={({ target }) => setSenha(target.value)}
              type="password"
            />
            <ButtonTag>Entrar</ButtonTag>
          </form>
          <NoAccountP>
            Não tem uma conta? <span>Cadastre-se</span>
          </NoAccountP>
        </ContainerLogin>
      </FundoImg>
      <Footer />
    </>
  );
};

export default LoginPage;
