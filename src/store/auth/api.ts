import axios, { setAuthorization } from 'libs/axios';
import { Dispatch } from 'redux';
// import { ActionType } from 'types';
import { setItem, USER_TOKEN } from 'libs/storage';

export const getMe = () => async () => {
  try {
    const {
      data: { data },
    } = await axios.get('/members/me');
    console.log('data', data);
    return data;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};

export const requestLogin = (accessToken: string) => async (
  dispatch: Dispatch,
) => {
  try {
    const {
      data: { data },
    } = await axios.post('/members/login', { accessToken });
    setAuthorization(data.accessToken);
    setItem(USER_TOKEN, data.accessToken);

    dispatch(getMe());

    return data.accessToken;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};
