import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import AppState, { AppStateType } from './app/state';

export interface RootReducerType {
  appState: AppStateType;
}

const rootReducer = combineReducers<RootReducerType>({
  appState: AppState,
});

export default createStore(
  rootReducer,
  {},
  composeWithDevTools({
    maxAge: 10,
    latency: 1500,
  })(applyMiddleware(thunk)),
);
