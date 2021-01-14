import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Box, Radio } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Carousel from 'react-material-ui-carousel';
import Plan from '../Ui/Plan';
import usePlans from '../../hooks/usePlans';

import colors from '../../styles/colors';
import { RECURRENCY_PERIODS } from '../../constants';

import PlanP from '../../assets/img/plan1.png';
import PlanM from '../../assets/img/plan2.png';
import PlanG from '../../assets/img/plan3.png';
import { BlueDescription } from '../Ui/Styled';

const PlanToRender = ({ plan, currentCycle }) => {

  const getPlanImg = () => {
    if (plan.id === 6) {
      return PlanM;
    } else if (plan.id === 5 || plan.id === 341) {
      return PlanP;
    } else {
      return PlanG;
    }
  }

  return (
    <Plan
      key={plan.id}
      id={plan.id}
      options={[
        <span>Sites Ilimitados</span>,
        <span>
          <strong>150 GB</strong> de Armazenamento
        </span>,
        <span>
          Contas de E-mail <strong>Ilimitadas</strong>
        </span>,
        <span>
          Criador de Sites <strong>Grátis</strong>
        </span>,
        <span>
          Certificado SSL <strong>Grátis</strong> (https)
        </span>,
      ]}
      planImg={getPlanImg()}
      bestOption={plan.id === 6}
      planName={plan.name}
      planPrice={+currentCycle.priceRenew}
      planMonths={currentCycle.months}
      planPromotionBefore={+currentCycle.priceOrder}
      planPromotionAfter={+currentCycle.priceOrder * 0.6}
    />
  );
};

function PlanSelection() {
  const { recurrency, setRecurrency, plansList } = usePlans();

  const handleChange = useCallback(
    ({ target }) => {
      setRecurrency(target.value);
    },
    [setRecurrency],
  );

  return (
    <PlansSelectionContainer className="d-flex flex-column align-center flex-base animated fadeIn">
      <BlueDescription className="sanimated fadeIn">Quero pagar a cada:</BlueDescription>
      <MonthsWrapper
        boxShadow={2}
        className="d-flex flex-row align-center flex-base  animated fadeIn"
      >
        {RECURRENCY_PERIODS.map(p => (
          <RadioWrapper
            onClick={() => setRecurrency(`${p.MONTHS}`)}
            className="d-flex flex-row align-center flex-base"
            selected={recurrency === `${p.MONTHS}`}
          >
            <CustomRadio
              checked={recurrency === `${p.MONTHS}`}
              onChange={handleChange}
              value={`${p.MONTHS}`}
              name="radio-button-demo"
              inputProps={{ 'aria-label': `${p.LABEL}` }}
            />
            <MonthLabel>{p.LABEL}</MonthLabel>
          </RadioWrapper>
        ))}
      </MonthsWrapper>
      <div className="d-flex flex-row flex-wrap align-center justify-center flex-base animated fadeIn display-desktop">
        {Object.values(plansList)
          .filter(p => !!p.cycle && !!Object.values(p.cycle))
          .map(p => {
            const currentCycle = Object.values(p.cycle).find(c => c && c.months === +recurrency);
            console.log(p.id);
            return (
              currentCycle &&
              (p.id === 6 ? (
                  <div className="d-flex justify-center align-center">
                    <OrangeBorder />
                    <PlanToRender currentCycle={currentCycle} plan={p} />
                  </div>
              ) : (
                <PlanToRender currentCycle={currentCycle} plan={p} />
              ))
            );
          })}
      </div>
      <CustomSlider
        strictIndexing={false}
        swipe
        animation="slide"
        autoPlay={false}
        indicators={false}
        navButtonsAlwaysVisible
        className="d-flex flex-base justify-center animated fadeIn display-mobile"
      >
        {Object.values(plansList)
          .filter(
            p => !!p.cycle && !!Object.values(p.cycle).find(c => c && c.months === +recurrency),
          )
          .map(p => {
            const currentCycle = Object.values(p.cycle).find(c => c.months === +recurrency);
            return <PlanToRender currentCycle={currentCycle} plan={p} />;
          })}
      </CustomSlider>
      <CheckPromotionDetails className="d-flex flex-base">
        <u>*Confira as condições da promoção</u>
      </CheckPromotionDetails>
    </PlansSelectionContainer>
  );
}

PlanSelection.propTypes = {};

export default PlanSelection;

const PlansSelectionContainer = styled.div`
  background-color: ${colors.clearWhite};
  height: 100%;
  padding: 0px 10px 50px;
`;

const MonthsWrapper = styled(Box)`
  && {
    border: 1px solid ${colors.blue};
    border-radius: 100px;
    height: 30px;
    margin: 20px 0px 50px;
    justify-content: space-evenly;
  }
`;

const RadioWrapper = styled.div`
  background-color: ${({ selected }) => (selected ? colors.blue : colors.clearWhite)};
  color: ${({ selected }) => (selected ? colors.white : colors.blue)};
  padding-right: 5px;
  border-radius: 100px;
  height: 30px;
  cursor: pointer;
`;

const MonthLabel = styled.div`
  width: 70px;
  font-size: 16px;
`;

const CustomRadio = withStyles({
  root: {
    color: colors.lightBlue,
    '&$checked': {
      color: colors.white,
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

const OrangeBorder = styled.div`
  z-index: 1;
  position: absolute;
  margin-top: -17px;
  height: 515px;
  width: 300px;
  background-color:  ${colors.orange};
  border-radius: 3px;
`;

const CustomSlider = styled(Carousel)`
  width: 100%;
`;

const CheckPromotionDetails = styled.div`
  width: 65%;
  font-size: 12px;
  margin-top: 50px;
  justify-content: flex-end;
  color: ${colors.blue};
`;
