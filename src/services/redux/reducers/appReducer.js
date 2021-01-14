import { handleActions } from 'redux-actions';
import { RESET_STORE, SET_APP } from '../actions';

const initialState = {
  loading: false,
};

export const App = handleActions(
  {
    [RESET_STORE]: () => initialState,
    [SET_APP]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  initialState,
);
