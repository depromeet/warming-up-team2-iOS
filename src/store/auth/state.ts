import { ActionType, getMeType } from 'types';
import produce from 'immer';

export const SET_USER_INFO = 'SET_USER_INFO';

export interface AuthStateType {
  userInfo: getMeType;
}

const initialState: AuthStateType = {
  userInfo: {
    connectionCode: '',
    id: 0,
    name: '',
    profileImageUrl: null,
    status: 'SOLO',
    spouseName: '',
  },
};

export default (state = initialState, action: ActionType): AuthStateType => {
  switch (action.type) {
    case SET_USER_INFO:
      return produce(state, draft => {
        draft.userInfo = action.payload.userInfo;
      });
    default:
      return state;
  }
};
