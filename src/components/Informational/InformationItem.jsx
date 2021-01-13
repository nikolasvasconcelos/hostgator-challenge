import React from 'react'
import PropTypes from 'prop-types'

import CheckImage from '../../assets/img/icon-check.png'
import styled from 'styled-components'
import colors from '../../styles/colors'

function InformationItem({label}) {
  return (
    <div>
      <CheckIcon src={CheckImage} alt="" />
      <InformationText>{label}</InformationText>
    </div>
  )
}

InformationItem.propTypes = {
  label: PropTypes.string.isRequired
}

export default InformationItem

const CheckIcon = styled.img`
  margin-right: 5px;
`;

const InformationText = styled.span`
  color: ${colors.lightBlue};
  font-size: 16px;
`;