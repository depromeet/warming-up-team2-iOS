import { ActionType } from 'types';
import produce from 'immer';

export const SET_EXPENDITUR_INFO = 'SET_EXPENDITUR_INFO';

export interface ExpenditureType {
  expenditureIds: string[];
  writingExpenditure: { [key: string]: any };
}

const initialState: ExpenditureType = {
  expenditureIds: [],
  writingExpenditure: {
    amountOfMoney: '',
    category: '미등록',
    description: '',
    title: '',
    expendedAt: '',
    paymentMethod: '',
  },
};

export default (state = initialState, action: ActionType): ExpenditureType => {
  switch (action.type) {
    case SET_EXPENDITUR_INFO:
      return produce(state, draft => {
        draft.writingExpenditure[action.payload.key] = action.payload.value;
      });
    default:
      return state;
  }
};
