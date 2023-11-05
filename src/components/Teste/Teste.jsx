import React from 'react';
import { api } from '../../api/api';

const Teste = () => {
  const [img, setImg] = React.useState('');

  React.useEffect(() => {
    const getUm = async () => {
      const response = await api.get('/produtos/1');
      console.log(response);
      setImg(response.data.imgUrl);
    };
    getUm();
  }, []);
  return (
    <div>
      <img style={{ width: '100px' }} src={img} alt="Img Teste" />
    </div>
  );
};

export default Teste;
