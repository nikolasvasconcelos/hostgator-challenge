import { handleActions } from 'redux-actions';
import { RECURRENCY_PERIODS } from '../../../constants';
import { RESET_PLANS, SET_PLANS } from '../actions';

const initialState = {
  plansList: [],
  recurrency: `${RECURRENCY_PERIODS[0].MONTHS}`
};

export const Plan = handleActions(
  {
    [RESET_PLANS]: () => initialState,
    [SET_PLANS]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  initialState,
);
