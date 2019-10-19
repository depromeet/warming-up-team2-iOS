import { NavigationActions } from 'react-navigation';
import { NavigationStackOptions } from 'react-navigation-stack';

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function push(routeName, params) {
  navigator.dispatch();
}

export default {
  navigate,
  setTopLevelNavigator,
};
