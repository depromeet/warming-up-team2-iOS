import { ActionType, ExpenditureResultType, ExpenditureWriteType } from 'types';
import produce from 'immer';
import { formatDates } from 'libs/dateUtils';

export const SET_EXPENDITUR_INFO = 'SET_EXPENDITUR_INFO';
export const FETCH_EXPENDITURE = 'FETCH_EXPENDITURE';
export const FETCH_EXPENDITURE_GRAPH = 'FETCH_EXPENDITURE_GRAPH';
export const RESET_EXPENDITUR_INFO = 'RESET_EXPENDITUR_INFO';

export interface ExpenditureType {
  expenditureIds: string[];
  monthlyTotalExpenditures: { [key: string]: number };
  writingExpenditure: ExpenditureWriteType;
}

const initialState: ExpenditureType = {
  expenditureIds: [],
  monthlyTotalExpenditures: {},
  writingExpenditure: {
    amountOfMoney: '',
    category: '미등록',
    description: '',
    title: '',
    expendedAt: formatDates(new Date()),
    paymentMethod: '카드',
    imageUrl: '',
  },
};

/* tslint:disable:object-literal-sort-keys */
export default (state = initialState, action: ActionType): ExpenditureType => {
  switch (action.type) {
    case SET_EXPENDITUR_INFO:
      return produce(state, draft => {
        draft.writingExpenditure[action.payload.key] = action.payload.value;
      });
    case RESET_EXPENDITUR_INFO:
      return produce(state, draft => {
        draft.writingExpenditure = initialState.writingExpenditure;
      });
    case FETCH_EXPENDITURE:
      return produce(state, draft => {
        draft.expenditureIds = action.payload.expenditures.map(
          (expenditure: ExpenditureResultType) => expenditure.id,
        );
      });
    case FETCH_EXPENDITURE_GRAPH:
      return produce(state, draft => {
        draft.monthlyTotalExpenditures =
          action.payload.monthlyTotalExpenditures;
      });
    default:
      return state;
  }
};
