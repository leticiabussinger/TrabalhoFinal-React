import React from 'react';
import { ButtonTag, ContainerLogin, NoAccountP, TitleForm } from './styled';
import Input from '../Input/Input';

const addUser = (e) => {
  e.preventDefault();
  api.post('/usuarios', {
    nome,
    telefone,
    whatsapp,
    observacoes,
  });
};

const FormRegister = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  return (
    <ContainerLogin>
      <TitleForm>Login</TitleForm>
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
  );
};

export default FormRegister;
