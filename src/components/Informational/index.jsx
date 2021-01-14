import React from 'react'
import styled from 'styled-components'

import colors from '../../styles/colors'

import LeftImage from '../../assets/img/desk.png'
import RightImage from '../../assets/img/guy.png'
import ArrowDown from '../../assets/img/arrow-down.png'
import BlueBG from '../../assets/img/BG-Azulzola.png'
import InformationItem from './InformationItem'

function Informational() {
  return (
    <InfosContainer className="d-flex flex-column flex-base animated fadeIn">
      <div className="d-flex flex-row flex-base">
        <InformationalImg className="d-flex information-img" src={LeftImage} alt="" />
        <ContentWrapper className="d-flex flex-column flex-base">
          <div>
            <div>Hospedagem de Sites</div>
            <h1>Tenha uma hospedagem de sites estável e evite perder visitantes diariamente</h1>
          </div>
          <Informations className="d-flex flex-row flex-wrap">
              <InformationItem label="99,9% de disponibilidade: seu site sempre no ar" />
              <InformationItem label="Suporte 24h, todos os dias" />
              <InformationItem label="Painel de Controle cPanel" />
          </Informations>
          <ArrowImg src={ArrowDown} alt="" />
        </ContentWrapper>
        <InformationalImg className="d-flex information-img" src={RightImage} alt="" />
      </div>
    </InfosContainer>
  )
}

export default Informational

const InfosContainer = styled.div`
  background: ${colors.clearWhite} url(${BlueBG}) no-repeat top center;
  background-size: 100% 85%;
  padding: 0px 2.5%;
`;
  
const ContentWrapper = styled.div`
  color: ${colors.white};
  justify-content: space-between;
  text-align: center;
  margin-bottom: 50px;
  padding-top: 50px;
`;

const Informations = styled.div`
  margin: 0px 100px 20px;
  justify-content: space-evenly;
`;

const InformationalImg = styled.img`
  margin-top: 50px;
  width: 25%;
  height: 25%;
`;

const ArrowImg = styled.img`
  margin-bottom: -10px;
  width: 50px;
  height: 50px;
  align-self: center;
`;
