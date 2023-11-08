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
import Footer from '../../components/FooterLogin/FooterLogin';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [emailIgual, setEmailIgual] = React.useState([]);
  const [errorGeral, setErrorGeral] = React.useState(false);
  const [errorEmail, setErrorEmail] = React.useState(false);
  const navigate = useNavigate();

  const addUser = (e) => {
    e.preventDefault();
    getUserPorEmail();
    if (emailIgual.length == 0) {
      if (nome != '' && email != '' && senha != '') {
        setEmailIgual([]);
        api.post('/usuarios', {
          nome,
          email,
          senha,
          carinho: [],
        });
        setErrorGeral(false);
        setErrorEmail(false);
      } else {
        setErrorGeral(true);
        setErrorEmail(false);
      }
    } else {
      setErrorGeral(false);
      setErrorEmail(true);
    }
  };

  const getUserPorEmail = async () => {
    const response = await api.get(`usuarios?email=${email}`);
    setEmailIgual(response.data);
  };

  React.useEffect(() => {
    if (emailIgual.length == 0) {
      if (nome != '' && email != '' && senha != '') {
        setEmailIgual([]);
        api.post('/usuarios', {
          nome,
          email,
          senha,
          carinho: [],
        });
        setErrorGeral(false);
        setErrorEmail(false);
      } else {
        setErrorGeral(true);
        setErrorEmail(false);
      }
    } else {
      setErrorGeral(false);
      setErrorEmail(true);
    }
  }, [emailIgual]);

  return (
    <>
      <GlobalStyleLogin />
      <FundoImg>
        <LogoSite
          onClick={() => {
            navigate('/');
          }}
          src={Logo}
          alt="Logo do site"
        />
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
            {errorGeral && (
              <NoAccountP>Preencha todos os campos corretamente.</NoAccountP>
            )}
            {errorEmail && (
              <NoAccountP>
                Erro, usuario ja existente com esse email.
              </NoAccountP>
            )}
            <ButtonTag>Registrar</ButtonTag>
          </form>
          <NoAccountP>
            Já possui uma conta?{' '}
            <span onClick={() => navigate('/login')}>Faça o login!</span>
          </NoAccountP>
        </ContainerLogin>
      </FundoImg>
      <Footer />
    </>
  );
};

export default RegisterPage;
