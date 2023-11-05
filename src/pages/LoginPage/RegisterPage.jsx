import React from 'react';
import {
  ButtonTag,
  ContainerLogin,
  FundoImg,
  LogoSite,
  NoAccountP,
  TitleForm,
} from './styled';
import Logo from '../../assets/img/logo.png';
import Input from '../../components/Input/Input';
import { api } from '../../api/api';
import { GlobalStyleLogin } from '../../global/globalStyle';
import Footer from '../../components/Footer/Footer';

const RegisterPage = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  const addUser = (e) => {
    e.preventDefault();
    api.post('/usuarios', {
      nome,
      email,
      senha,
    });
  };

  return (
    <>
      <GlobalStyleLogin />
      <FundoImg>
        <LogoSite src={Logo} alt="Logo do site" />
        <ContainerLogin>
          <TitleForm>Registre-se</TitleForm>
          <form onSubmit={addUser}>
            <Input
              id="nome"
              label="Nome"
              value={nome}
              onChange={({ target }) => setNome(target.value)}
            />
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
            Já possui uma conta? <span>Faça o login!</span>
          </NoAccountP>
        </ContainerLogin>
      </FundoImg>
      <Footer />
    </>
  );
};

export default RegisterPage;
