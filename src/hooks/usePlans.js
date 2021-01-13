import axios from '../services/axiosClient';
import { useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ENDPOINTS } from '../constants';
import { setApp, setPlans } from '../services/redux/actions';

const usePrices = () => {
  const dispatch = useDispatch();

  const fetchPlans = useCallback(
    async () => {
      dispatch(setApp({loading: true}));
      console.log(axios.defaults.baseURL)
      try {
        const {data} = await axios.get(ENDPOINTS.prices)
        dispatch(setPlans({plansList: data.shared.products}))
      } catch (error) {
        console.error(`SERVER_ERROR::`, error)
      }
      dispatch(setApp({loading: false}));
    },
    [dispatch],
  )

  const setRecurrency = useCallback(
    (months) => {
      dispatch(setPlans({recurrency: months}))
    },
    [dispatch],
  )

  const {plansList, recurrency} = useSelector(
    (state) => ({
      plansList: state.Plan.plansList,
      recurrency: state.Plan.recurrency,
  }), shallowEqual)

  return {plansList, recurrency, fetchPlans, setRecurrency}
}

export default usePrices;