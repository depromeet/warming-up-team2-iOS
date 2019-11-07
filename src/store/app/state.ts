import { ActionType } from 'types';
import produce from 'immer';

export const SET_CURRENT_TAB_INDEX = 'SET_CURRENT_TAB_INDEX';

export interface AppStateType {
  currentTabIndex: number;
}

const initialState: AppStateType = {
  currentTabIndex: 0,
};

export default (state = initialState, action: ActionType): AppStateType => {
  switch (action.type) {
    case SET_CURRENT_TAB_INDEX:
      return produce(state, draft => {
        draft.currentTabIndex = action.payload.currentTabIndex;
      });
    default:
      return state;
  }
};
