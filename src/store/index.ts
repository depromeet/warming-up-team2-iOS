import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import AppState, { AppStateType } from './app/state';
import AuthState, { AuthStateType } from './auth/state';
import ExpenditureState, { ExpenditureType } from './expenditure/state';
import ExpenditureEntities, {
  ExpentureEntityStateType,
} from './ExpenditureEntities/state';

export interface RootReducerType {
  appState: AppStateType;
  authState: AuthStateType;
  expenditureState: ExpenditureType;
  expenditureEntities: ExpentureEntityStateType;
}

const rootReducer = combineReducers<RootReducerType>({
  appState: AppState,
  authState: AuthState,
  expenditureState: ExpenditureState,
  expenditureEntities: ExpenditureEntities,
});

export default createStore(
  rootReducer,
  {},
  composeWithDevTools({
    maxAge: 10,
    latency: 1500,
  })(applyMiddleware(thunk)),
);
