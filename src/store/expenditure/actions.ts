import axios from 'libs/axios';
import { Dispatch } from 'redux';

import { SET_EXPENDITUR_INFO } from './state';
import { RootReducerType } from '../';

export const requestPost = () => async (
  dispatch: Dispatch,
  getState: () => RootReducerType,
) => {
  try {
    const { writingExpenditure } = getState().expenditureState;
    const newWritingExpenditure = {
      ...writingExpenditure,
      amountOfMoney: parseInt(writingExpenditure.amountOfMoney, 10),
    };

    const {
      data: { data },
    } = await axios.post('/expenditures', newWritingExpenditure);
    console.log('data', data);
    return data;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};

export const setExpenditureInfo = (key: string, value: number | string) => ({
  type: SET_EXPENDITUR_INFO,
  payload: { key, value },
});
