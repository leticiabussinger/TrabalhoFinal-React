import React from 'react';
import { ButtonTag, ContainerLogin, NoAccountP, TitleForm } from './styled';
import Input from '../Input/Input';

const FormLogin = () => {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  const loginUser = async (e) => {
    e.preventDefault();
    const response = await api.get(`/usuarios?email=${email}`);
    if (response.data.length != 0) {
      if (response.data[0].senha == senha) {
      }
    }
  };

  return (
    <ContainerLogin>
      <TitleForm>Login</TitleForm>
      <form onSubmit={loginUser}>
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
        <ButtonTag>Entrar</ButtonTag>
      </form>
      <NoAccountP>
        Não tem uma conta? <span>Cadastre-se</span>
      </NoAccountP>
    </ContainerLogin>
  );
};

export default FormLogin;
