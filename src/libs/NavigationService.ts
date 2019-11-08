import {
  StackActions,
  NavigationActions,
  NavigationDispatch,
  NavigationParams,
  NavigationNavigateAction,
  NavigationContainerComponent,
} from 'react-navigation';

let dispatch: NavigationDispatch;

type ScreenName =
  | 'Login'
  | 'Main'
  | 'Home'
  | 'RegistCode'
  | 'FirstStep'
  | 'SecStep';

export function navigate(routeName: ScreenName, params?: NavigationParams) {
  const action = NavigationActions.navigate({
    routeName,
    params,
  });
  dispatch(action);
}

export function popToPop() {
  const action = StackActions.popToTop();
  dispatch(action);
}

export function push(routeName: ScreenName, params?: NavigationParams) {
  const action = StackActions.push({
    routeName,
    params,
  });
  dispatch(action);
}

export function replace(routeName: ScreenName, params?: NavigationParams) {
  const action = StackActions.replace({
    routeName,
    params,
  });
  dispatch(action);
}

export function dispatchNavigation(action: NavigationNavigateAction) {
  dispatch(action);
}

export function registerAppContainer(container: NavigationContainerComponent) {
  dispatch = container.dispatch;
}
