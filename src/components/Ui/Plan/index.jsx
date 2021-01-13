import React from 'react'
import PropTypes from 'prop-types'

function Plan({planImg, planName, planPrice, planPromotionBefore,  planPromotionAfter, options}) {
  return (
    <div className="d-flex flex-base flex-column">
      <img src={planImg} alt={planName} />
      <strong>{planName}</strong>
      <button>Contrate Agora</button>
      <strong>{planPromotionBefore}</strong>
      <strong>{planPromotionAfter}</strong>
      <span>equivalente a</span>
      <span>
        R$ <strong>{planPrice}</strong>
      </span>
    </div>
  )
}

Plan.propTypes = {
  planImg: PropTypes.string.isRequired,
  planName: PropTypes.string.isRequired,
  planPrice: PropTypes.number.isRequired,
  planPromotionBefore: PropTypes.number.isRequired,
  planPromotionAfter: PropTypes.number.isRequired,
  options: PropTypes.array.isRequired,
}

export default Plan

