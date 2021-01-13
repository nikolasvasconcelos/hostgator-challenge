import { createAction } from 'redux-actions';

export const RESET_STORE = `RESET_STORE`;
export const resetAppStore = createAction(RESET_STORE);

export const SET_APP = `SET_APP`;
export const setApp = createAction(SET_APP);

export const RESET_PLANS = `RESET_PLANS`;
export const resetPlansStore = createAction(RESET_PLANS);

export const SET_PLANS = `SET_PLANS`;
export const setPlans = createAction(SET_PLANS);
