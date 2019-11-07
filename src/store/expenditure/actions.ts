import axios from 'libs/axios';
import { Dispatch } from 'redux';
import { ActionType, ExpenditureWriteType } from 'types';

export const requestLogin = (
  expenditureData: ExpenditureWriteType,
) => async () => {
  try {
    const {
      data: { data },
    } = await axios.post('/expenditures', expenditureData);
    console.log('data', data);
    return data;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};

export const requestLogin2 = (accessToken: string) => async (
  dispatch: Dispatch<ActionType>,
) => {
  // const { data } = await axios.post('/login', { accessToken });
  // console.log('data', data);
  // // setAuthorization(data.accessToken);
  // // dispatch({type: ""})
  // return data;
};
