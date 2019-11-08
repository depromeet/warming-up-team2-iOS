import { createSelector } from 'reselect';
import _compact from 'lodash/compact';

import { RootReducerType } from '../';

export const expenditureStateSelector = (state: RootReducerType) =>
  state.expenditureState;

export const expenditureEntitiesStateSelector = (state: RootReducerType) =>
  state.expenditureEntities;

const fromIdsToExpenditureList = (
  ids: string[],
  expenditureEntities: { [key: string]: any },
) => _compact(ids.map(id => expenditureEntities[id]));

export const selectExpenditureIds = createSelector(
  expenditureStateSelector,
  expenditureState => expenditureState.expenditureIds,
);

export const expendituretEntitiesSelector = createSelector(
  expenditureEntitiesStateSelector,
  expenditureEntitiesState => expenditureEntitiesState.byId,
);

export const selectExpenditureList = createSelector(
  [selectExpenditureIds, expendituretEntitiesSelector],
  fromIdsToExpenditureList,
);
