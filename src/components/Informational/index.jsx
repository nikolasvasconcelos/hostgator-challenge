import React from 'react'
import styled from 'styled-components'

import colors from '../../styles/colors'

import LeftImage from '../../assets/desk.png'
import RightImage from '../../assets/guy.png'
import ArrowDown from '../../assets/arrow-down.png'
import InformationItem from './InformationItem'

function Informational() {
  return (
    <InfosContainer className="d-flex flex-column">
      <div className="d-flex flex-row flex-base">
        <img src={LeftImage} alt="" />
        <ContentWrapper className="flex-base">
          <div>Hospedagem de Sites</div>
          <h1>Tenha uma hospedagem de sites estável e evite perder visitantes diariamente</h1>
          <Informations className="d-flex flex-row flex-wrap">
              <InformationItem label="99,9% de disponibilidade: seu site sempre no ar" />
              <InformationItem label="Suporte 24h, todos os dias" />
              <InformationItem label="Painel de Controle cPanel" />
          </Informations>
        </ContentWrapper>
        <img src={RightImage} alt="" />
      </div>
      <div className="d-flex flex-base align-center justify-center">
        <img src={ArrowDown} alt="" />
      </div>
    </InfosContainer>
  )
}

export default Informational

const InfosContainer = styled.div`
  background: ${colors.darkBlue} 0% 0% no-repeat padding-box;
  padding: 50px 5%;
`;
  
const ContentWrapper = styled.div`
  color: ${colors.white};
  margin-bottom: 50px;
  padding: 0px 50px;
`;

const Informations = styled.div`
  margin: 50px 100px 0px;
  justify-content: space-evenly;
`;
