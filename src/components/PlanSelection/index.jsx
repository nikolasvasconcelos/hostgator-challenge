import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Plan from '../Ui/Plan'

import colors from '../../styles/colors'

import PlanP from '../../assets/plan1.png'
import PlanM from '../../assets/plan2.png'
import PlanG from '../../assets/plan3.png'

function PlanSelection(props) {
  return (
    <PlansSelectionContainer className="d-flex flex-column align-center flex-base">
      <span>Quero pagar a cada:</span>
      <MonthsWrapper className="d-flex flex-row align-center justify-center flex-base">
        <div className="flex-base">
          <input type="radio" name="months" value={36} defaultChecked /> 3 anos
        </div>
        <div className="flex-base">
          <input type="radio" name="months" value={12} /> 1 ano
        </div>
        <div className="flex-base">
          <input type="radio" name="months" value={1} /> 1 mês
        </div>
      </MonthsWrapper>
      <div className="d-flex flex-row align-center justify-center flex-base">
        <Plan planImg={PlanP} planName="Plano P" planPrice={19.90} planPromotionBefore={19.90} planPromotionAfter={19.90} />
        <Plan planImg={PlanM} planName="Plano M" planPrice={19.90} planPromotionBefore={19.90} planPromotionAfter={19.90} />
        <Plan planImg={PlanG} planName="Plano G" planPrice={19.90} planPromotionBefore={19.90} planPromotionAfter={19.90} />
      </div>
    </PlansSelectionContainer>
  )
}

PlanSelection.propTypes = {

}

export default PlanSelection

const PlansSelectionContainer = styled.div`
  background-color: ${colors.lightBlue};
  height: 100%;
`;

const MonthsWrapper = styled.div`
  border: 1px solid ${colors.blue};
  border-radius: 100px;
  width: 275px;
  height: 30px;
  padding: 0px 10px;
  margin-top: 10px;
`;
