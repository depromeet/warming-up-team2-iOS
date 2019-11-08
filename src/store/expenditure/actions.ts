import axios from 'libs/axios';
import { Dispatch } from 'redux';
import { ActionType } from 'types';
import _isEmpty from 'lodash/isEmpty';

import { formatDatesDashfromKO } from 'libs/dateUtils';
import {
  SET_EXPENDITUR_INFO,
  FETCH_EXPENDITURE,
  RESET_EXPENDITUR_INFO,
  FETCH_EXPENDITURE_GRAPH,
} from './state';
import { RootReducerType } from '../';

export const uplaodImage = (id: string) => async (
  dispatch: Dispatch<ActionType>,
  getState: () => RootReducerType,
) => {
  try {
    const { writingExpenditure } = getState().expenditureState;

    if (_isEmpty(writingExpenditure.imageUrl)) {
      return;
    }

    const formData = new FormData();
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    formData.append('file', {
      uri: writingExpenditure.imageUrl,
      name: `user-upload-image- ${new Date().toISOString}`,
      type: 'images/png',
    });

    const {
      data: { data },
    } = await axios.post(`/expenditures/${id}/upload-image`, formData, config);
  } catch (error) {
    console.log('error', error);
  }
};

export const fetchExpenditures = () => async (
  dispatch: Dispatch<ActionType>,
) => {
  try {
    const {
      data: { data },
    } = await axios.get('/expenditures?sort=expendedAt,desc&size=1000');

    dispatch({
      type: FETCH_EXPENDITURE,
      payload: { expenditures: data },
    });
  } catch (error) {
    console.log('error', error);
  }
};

export const fetchExpendituresGraph = () => async (
  dispatch: Dispatch<ActionType>,
) => {
  try {
    const {
      data: {
        data: { monthlyTotalExpenditures },
      },
    } = await axios.get('/expenditures?format=graph&type=monthly');

    dispatch({
      type: FETCH_EXPENDITURE_GRAPH,
      payload: { monthlyTotalExpenditures },
    });
  } catch (error) {
    console.log('error', error);
  }
};

export const fetchExpendituresCategory = () => async (
  dispatch: Dispatch<ActionType>,
) => {
  try {
    const {
      data: { data },
    } = await axios.get('/categories?format=graph');

    // dispatch({
    //   type: FETCH_EXPENDITURE_GRAPH,
    //   payload: { expenditureGraph: data },
    // });
  } catch (error) {
    console.log('error', error);
  }
};

export const requestPost = () => async (
  dispatch: Dispatch<any>,
  getState: () => RootReducerType,
) => {
  try {
    const { writingExpenditure } = getState().expenditureState;
    const newWritingExpenditure = {
      ...writingExpenditure,
      amountOfMoney: parseInt(`${writingExpenditure.amountOfMoney}`, 10),
      paymentMethod:
        writingExpenditure.paymentMethod === '카드' ? 'CARD' : 'CASH',
      expendedAt: formatDatesDashfromKO(writingExpenditure.expendedAt),
    };

    delete newWritingExpenditure.imageUrl;

    const {
      data: { data },
    } = await axios.post('/expenditures', newWritingExpenditure);
    await dispatch(uplaodImage(data.id));
    dispatch(fetchExpenditures());
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

export const resetExpenditureInfo = () => ({
  type: RESET_EXPENDITUR_INFO,
});
