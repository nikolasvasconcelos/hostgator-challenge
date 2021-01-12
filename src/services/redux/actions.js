import { createAction } from 'redux-actions';

export const RESET_STORE = `RESET_STORE`;
export const resetAppStore = createAction(RESET_STORE);

export const SET_APP = `SET_APP`;
export const setApp = createAction(SET_APP);
