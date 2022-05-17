/**
 * This has been extracted and tweaked from the `Ignite CLI` boilerplate
 * navigation hooks helpers.
 * - Very handy for cases like storing navigation state especially during dev.
 */

import { useState, useEffect, useRef } from 'react';
import { BackHandler } from 'react-native';
import { useNavigation as RNUseNavigation } from '@react-navigation/native';

import { saveData, loadData } from '@utils/storage';
import errorLogger, { ErrorEventsEnum } from '@services/error-logger';

import { TUseNavigatorScreenParams } from './types';
import { getActiveRouteName, navigationRef } from './navigation-utilities';

// This puts screens in a native ViewController or Activity. If you want fully native
// stack navigation, use `createNativeStackNavigator` in place of `createStackNavigator`:
// https://github.com/kmagiera/react-native-screens#using-native-stack-navigator
export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

/**
 * Adds type safety to the useNavigation hook and re-exports it for use in
 * other components.
 */
export function useNavigation() {
  return RNUseNavigation<TUseNavigatorScreenParams>();
}

/**
 * Hook that handles Android back button presses and forwards those on to
 * the navigation or allows exiting the app.
 */
export function useBackButtonHandler(canExit: (routeName: string) => boolean) {
  const canExitRef = useRef(canExit);

  useEffect(() => {
    canExitRef.current = canExit;
  }, [canExit]);

  useEffect(() => {
    // We'll fire this when the back button is pressed on Android.
    const onBackPress = () => {
      if (!navigationRef.isReady()) {
        return false;
      }

      // grab the current route
      const routeName = getActiveRouteName(navigationRef.getRootState());

      // are we allowed to exit?
      if (canExitRef.current(routeName)) {
        // let the system know we've not handled this event
        return false;
      }

      // we can't exit, so let's turn this into a back action
      if (navigationRef.canGoBack()) {
        navigationRef.goBack();
        return true;
      }

      return false;
    };

    // Subscribe when we come to life
    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    // Unsubscribe when we're done
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, []);
}

/**
 * Custom hook for persisting navigation state.
 */
export function useNavigationPersistence() {
  const [initialNavigationState, setInitialNavigationState] = useState<any>();

  // This feature is particularly useful in development mode.
  // It is selectively enabled in development mode with
  // the following approach. If you'd like to use navigation persistence
  // in production, remove the __DEV__ and set the state to true
  const [isRestored, setIsRestored] = useState(!__DEV__);

  const routeNameRef = useRef<string | undefined>();

  const onNavigationStateChange = (state: any) => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = getActiveRouteName(state);

    if (previousRouteName !== currentRouteName) {
      // track screens.
      if (__DEV__) {
        console.log(currentRouteName);
      }
    }

    // Save the current route name for later comparision
    routeNameRef.current = currentRouteName;

    // Persist state to storage
    saveData(NAVIGATION_PERSISTENCE_KEY, state);
  };

  const restoreState = async () => {
    try {
      const state = await loadData(NAVIGATION_PERSISTENCE_KEY);
      if (state) setInitialNavigationState(state);
    } catch (error) {
      errorLogger({
        error: error as Error,
        errorCode: ErrorEventsEnum.ERROR_IN_APP_INITIALIZATION,
        message: 'Failed to restore navigation state',
      });
    } finally {
      setIsRestored(true);
    }
  };

  useEffect(() => {
    if (!isRestored) {
      restoreState();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRestored]);

  return {
    onNavigationStateChange,
    restoreState,
    isRestored,
    initialNavigationState,
  };
}
