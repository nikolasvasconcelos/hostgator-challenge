import React from 'react'
import styled from 'styled-components'

import Logo from '../../assets/hostgator-logo.png'

function Header() {
  return (
    <HeaderContainer className="d-flex">
      <HeaderLogo src={Logo} alt="Hostgator" />
      <div />
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  height: 55px;
  width: 100%;
  justify-content: space-around;
`;

const HeaderLogo = styled.img`
  margin: 10px 0px;
  height: 35px;
  width: 190px;
`;
