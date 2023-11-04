import React from 'react';
import { Container, HeaderTag } from './styled';

const Header = () => {
  return (
    <HeaderTag>
      <Container>
        <p>Logo</p>
        <input type="text" />
        <p>login</p>
      </Container>
    </HeaderTag>
  );
};

export default Header;
