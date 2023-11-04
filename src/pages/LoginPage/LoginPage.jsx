import React from 'react';
import { GlobalStyleLogin } from '../../global/globalStyle';
import Footer from '../../components/Footer/Footer';
import { ContainerLogin, FundoImg } from './styled';
import Logo from '../../assets/img/logo.png';
import Input from '../../components/Input/Input';

const LoginPage = () => {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  return (
    <>
      <GlobalStyleLogin />
      <FundoImg>
        <img style={{ width: '100px' }} src={Logo} alt="Logo do site" />
        <ContainerLogin>
          <h2></h2>
          <form>
            <Input
              id="email"
              label="Email"
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
          </form>
        </ContainerLogin>
      </FundoImg>
      <Footer />
    </>
  );
};

export default LoginPage;
