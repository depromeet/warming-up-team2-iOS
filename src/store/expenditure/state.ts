import { ActionType, ExpenditureWriteType } from 'types';
import produce from 'immer';

export const SET_CURRENT_TAB_INDEX = 'SET_CURRENT_TAB_INDEX';

export interface ExpenditureType {
  expenditureIds: string[];
  writingExpenditure: ExpenditureWriteType;
}

const initialState: ExpenditureType = {
  expenditureIds: [],
  writingExpenditure: {
    amountOfMoney: 0,
    category: '미등록',
    description: '',
    title: '',
  },
};

export default (state = initialState, action: ActionType): AppStateType => {
  switch (action.type) {
    default:
      return state;
  }
};
