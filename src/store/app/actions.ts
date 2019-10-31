import { SET_CURRENT_TAB_INDEX } from './state';

export const setCurrentIndex = (index: number) => ({
  type: SET_CURRENT_TAB_INDEX,
  payload: { currentTabIndex: index },
});

export const setCurrentIndex2 = (index: number) => ({
  type: SET_CURRENT_TAB_INDEX,
  payload: { currentTabIndex: index },
});
