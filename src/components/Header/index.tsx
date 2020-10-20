import React from 'react';
import { HeaderContainer } from './styles';
import logoImg from '../../assets/img/logo.png';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="logo" />
    </HeaderContainer>
  );
};

export default Header;
