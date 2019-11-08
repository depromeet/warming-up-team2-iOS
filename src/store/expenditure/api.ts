import axios, { setAuthorization } from 'libs/axios';
import { Dispatch } from 'redux';
import { ActionType } from 'types';
import { setItem, USER_TOKEN } from 'libs/storage';

export const requestLogin = (accessToken: string) => async () => {
  try {
    const {
      data: { data },
    } = await axios.post('/members/login', { accessToken });
    setAuthorization(data.accessToken);
    setItem(USER_TOKEN, data.accessToken);
    return data.accessToken;
  } catch (error) {
    return null;
  }
};

export const requestLogin2 = (accessToken: string) => async (
  dispatch: Dispatch<ActionType>,
) => {
  const { data } = await axios.post('/login', { accessToken });
  // setAuthorization(data.accessToken);
  // dispatch({type: ""})
  return data;
};
