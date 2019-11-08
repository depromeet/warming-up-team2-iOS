import produce from 'immer';

import { FETCH_EXPENDITURE } from 'store/expenditure/state';
import { ExpenditureResultType, ActionType } from 'types';

export interface ExpentureEntityStateType {
  byId: { [id: string]: ExpenditureResultType };
}

const initialState: ExpentureEntityStateType = {
  byId: {},
};

export default function movieEntities(
  state = initialState,
  action: ActionType,
): ExpentureEntityStateType {
  switch (action.type) {
    case FETCH_EXPENDITURE:
      return produce(state, draft => {
        action.payload.expenditures.forEach(
          (expenditure: ExpenditureResultType) => {
            draft.byId[expenditure.id] = expenditure;
          },
        );
      });
    default:
      return state;
  }
}
