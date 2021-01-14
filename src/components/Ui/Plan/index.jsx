import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { formatCurrency } from '@brazilian-utils/brazilian-utils';
import { Paper } from '@material-ui/core';
import { BlueDescription } from '../Styled';

import colors from '../../../styles/colors';
import InfoIcon from '../../../assets/img/info.png';

function Plan({
  bestOption,
  planImg,
  planName,
  planPrice,
  planMonths,
  planPromotionBefore,
  planPromotionAfter,
  options = [],
}) {
  return (
    <PlanContainer className="d-flex flex-column align-center">
      <SmallPlanSection className="d-flex flex-base flex-column align-center">
        <PlanImg src={planImg} alt={planName} />
        <Title>{planName}</Title>
      </SmallPlanSection>
      <BiggerPlanSection bordered className="d-flex flex-base flex-column align-center">
        <DiscountSummary className="d-flex flex-row">
          <strike>R$ {formatCurrency(planPromotionBefore)} </strike>
          <strong>R$ {formatCurrency(planPromotionAfter)}</strong>
        </DiscountSummary>
        <span>equivalente a</span>
        <PlanMonthPrice>
          R${` `}
          <PlanMonthPriceNumber>
            {formatCurrency(planPromotionAfter / planMonths)}
          </PlanMonthPriceNumber>
          /mês *
        </PlanMonthPrice>
        <HirePlan bestOption={bestOption}>
          <strong>Contrate Agora</strong>
        </HirePlan>
        <div className="d-flex flex-row align-center">
          <strong>1 ano de Domínio Grátis</strong>
          <img src={InfoIcon} alt="information" width="15" height="15" />
        </div>
        <div className="d-flex flex-row align-center">
          <BlueDescription>
            economize R$ {formatCurrency(planPrice - planPromotionAfter)}
          </BlueDescription>
          <DiscountPercentage>
            <strong>40% OFF</strong>
          </DiscountPercentage>
        </div>
      </BiggerPlanSection>
      <OptionsSection className="d-flex flex-base flex-column align-center">
        {options.map(o => o)}
      </OptionsSection>
    </PlanContainer>
  );
}

Plan.propTypes = {
  planImg: PropTypes.string.isRequired,
  planName: PropTypes.string.isRequired,
  planPrice: PropTypes.number.isRequired,
  planMonths: PropTypes.number.isRequired,
  planPromotionBefore: PropTypes.number.isRequired,
  planPromotionAfter: PropTypes.number.isRequired,
  options: PropTypes.array.isRequired,
  bestOption: PropTypes.bool,
};

export default Plan;

const PlanContainer = styled.div`
  border: 0.5px solid ${colors.lightBlue};
  border-radius: 4px;
  background-color: ${colors.white};
  margin: 0px 5px 30px;
  width: 300px;
  height: 500px;
  z-index: 2;
`;

const PlanSection = styled.div`
  border-top: ${({ bordered }) => Number(bordered)}px solid ${colors.lightBlue};
  border-bottom: ${({ bordered }) => Number(bordered)}px solid ${colors.lightBlue};
  justify-content: space-evenly;
  width: 300px;
  padding: 25px 0px;
`;

const OptionsSection = styled(PlanSection)`
  && {
    justify-content: space-between;
    align-items: baseline;
    padding-left: 40px;
    font-size: 13px;
  }
`;

const SmallPlanSection = styled(PlanSection)`
  && {
    flex: 0.5;
  }
`;

const BiggerPlanSection = styled(PlanSection)`
  && {
    flex: 2.5;
    font-size: 14px;
  }
`;

const PlanImg = styled.img`
  width: 45px;
  height: 42px;
`;

const Title = styled.strong`
  font-size: 20px;
  color: ${colors.darkBlue};
`;

const DiscountSummary = styled.div`
  font-size: 16px;
  width: 175px;
  justify-content: space-evenly;
`;

const HirePlan = styled.button`
  font-size: 22px;
  margin: 15px 0px;
  color: ${colors.white};
  padding: 10px 17.5px;
  border-radius: 100px;
  border: none;
  width: 80%;
  background-color: ${({ bestOption }) => (bestOption ? colors.orange : colors.blue)};
`;

const PlanMonthPrice = styled.span`
  font-size: 20px;
  color: ${colors.darkBlue};
`;

const PlanMonthPriceNumber = styled.strong`
  font-size: 28px;
`;

const DiscountPercentage = styled.div`
  font-size: 14px;
  color: ${colors.white};
  background-color: ${colors.green};
  border-radius: 100px;
  padding: 2px;
  height: 20px;
  width: 70px;
  text-align: center;
  margin-left: 10px;
`;
