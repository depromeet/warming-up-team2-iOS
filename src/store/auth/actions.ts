import axios, { setAuthorization } from 'libs/axios';
import { Dispatch } from 'redux';
import { ActionType } from 'types';
import { setItem, USER_TOKEN } from 'libs/storage';

import { SET_USER_INFO } from './state';

// memer 도메인도 함께 추가

export const getMe = () => async (dispatch: Dispatch<ActionType>) => {
  try {
    const {
      data: { data },
    } = await axios.get('/members/me');
    dispatch({
      type: SET_USER_INFO,
      payload: {
        userInfo: data,
      },
    });
    return data;
  } catch (error) {
    return null;
  }
};

export const requestLogin = (accessToken: string) => async (
  dispatch: Dispatch<any>,
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
    return null;
  }
};

export const requestConnect = (connectionCode: string) => async (
  dispatch: Dispatch<any>,
) => {
  try {
    const {
      data: { data },
    } = await axios.post('/members/me/connect', { connectionCode });
    dispatch(getMe());
    return data;
  } catch (error) {
    alert('연동코드가 잘못 됐습니다');
    return null;
  }
};
