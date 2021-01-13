import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Box, Radio } from '@material-ui/core'
import Plan from '../Ui/Plan'
import usePlans from '../../hooks/usePlans'

import colors from '../../styles/colors'
import { RECURRENCY_PERIODS } from '../../constants'

import PlanP from '../../assets/img/plan1.png'
import PlanM from '../../assets/img/plan2.png'
import PlanG from '../../assets/img/plan3.png'

function PlanSelection() {
  const {recurrency, setRecurrency, plansList} = usePlans();

  const handleChange = useCallback(
    ({target}) => {
      setRecurrency(target.value)
    },
    [setRecurrency],
  );

  return (
    <PlansSelectionContainer className="d-flex flex-column align-center flex-base">
      <span>Quero pagar a cada:</span>
      <MonthsWrapper boxShadow={2} className="d-flex flex-row align-center flex-base">
        {Object.values(RECURRENCY_PERIODS).map(p => (
          <RadioWrapper onClick={() => setRecurrency(`${p.MONTHS}`)} className="d-flex flex-row align-center flex-base" selected={recurrency === `${p.MONTHS}`}>
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
      <div className="d-flex flex-row align-center justify-center flex-base">
        {Object.values(plansList)?.filter(p => !!p.cycle).map(p => {
          const currentCycle = Object.values(p.cycle).find(c => c?.months === +recurrency);
          console.log(`CURRENT>>`, currentCycle)
          return currentCycle && (
            <Plan key={p.id} planImg={PlanP} planName={p.name} planPrice={+currentCycle.priceRenew} planMonths={currentCycle.months} planPromotionBefore={+currentCycle.priceOrder} planPromotionAfter={(+currentCycle.priceOrder * 0.6)} o={['Descrição','Descrição','Descrição','Descrição','Descrição']} />
          )
        })}
      </div>
    </PlansSelectionContainer>
  )
}

PlanSelection.propTypes = {

}

export default PlanSelection

const PlansSelectionContainer = styled.div`
  background-color: ${colors.clearWhite};
  height: 100%;
`;

const MonthsWrapper = styled(Box)`
  && {
    border: 1px solid ${colors.blue};
    border-radius: 100px;
    height: 30px;
    margin-top: 10px;
    justify-content: space-evenly
  }
`;

const RadioWrapper = styled.div`
  background-color: ${({selected}) => selected ? colors.blue : colors.clearWhite};
  color: ${({selected}) => selected ? colors.white : colors.blue};
  padding-right: 5px;
  border-radius: 100px;
  height: 30px;
  cursor: pointer;
  `;
  
const MonthLabel = styled.div`
  width: 70px;
  font-size: 16px;
`;

const CustomRadio = styled(Radio)`
  && {

  }
`;
