import React from 'react';
import { GlobalStyleLogin } from '../../global/globalStyle';
import Footer from '../../components/FooterLogin/FooterLogin';
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
import { UserContext } from '../../context/UserContext';

const LoginPage = () => {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [errorSenha, setErrorSenha] = React.useState(false);
  const [errorEmail, setErrorEmail] = React.useState(false);
  const { setUserLogado } = React.useContext(UserContext);
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const loginUser = async (e) => {
    e.preventDefault();
    const response = await api.get(`/usuarios?email=${email}`);
    if (response.data.length != 0) {
      if (response.data[0].senha == senha) {
        setUserLogado({ id: response.data[0].id, nome: response.data[0].nome });
        localStorage.setItem(
          'userLogado',
          JSON.stringify({
            id: response.data[0].id,
            nome: response.data[0].nome,
          }),
        );
        setErrorSenha(false);
        setErrorEmail(false);
        navigate('/');
      } else {
        setErrorEmail(false);
        setErrorSenha(true);
      }
    } else {
      setErrorSenha(false);
      setErrorEmail(true);
    }
  };

  const [imageLoaded, setImageLoaded] = React.useState(false);

  React.useEffect(() => {
    console.log("Passou")
    const backgroundImage = new Image();
    backgroundImage.src = '/assets/img/FundoLogin.png';

    backgroundImage.onload = () => {
      setImageLoaded(true);
      console.log(imageLoaded)
      // Faça qualquer outra coisa que você precise fazer quando a imagem estiver carregada
    };
    backgroundImage.onerror = (error) => {
      console.error('Erro ao carregar a imagem:', error);
    };
  }, []);

  return (
    <>
      <GlobalStyleLogin />
      {imageLoaded && (
        <>
          <FundoImg>
            <LogoSite
              onClick={() => {
                navigate('/');
              }}
              src={Logo}
              alt="Logo do site"
            />
            <ContainerLogin>
              <TitleForm>Login</TitleForm>
              <form onSubmit={loginUser}>
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
                {errorEmail && <NoAccountP>Usuario inexistente</NoAccountP>}
                {errorSenha && <NoAccountP>Senha incorreta</NoAccountP>}
                <ButtonTag>Entrar</ButtonTag>
              </form>
              <NoAccountP>
                Não tem uma conta?{' '}
                <span onClick={() => navigate('/register')}>Cadastre-se</span>
              </NoAccountP>
            </ContainerLogin>
          </FundoImg>
          <Footer />
        </>
      )}
    </>
  );
};

export default LoginPage;
