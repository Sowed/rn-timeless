/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app.
 *
 * - app navigation resides in `./app/navigators`, so head over there
 * if you're interested in adding screens and navigators.
 */

import React, { useCallback, useEffect, useState } from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';

import '@i18n';
import '@utils/ignore-warnings';

import { AppNavigationContainer, useNavigationPersistence } from '@navigators';
import { ThemeProvider } from '@theme';
import { AppQueryProvider } from '@services/react-query';
import errorLogger, { ErrorEventsEnum } from '@services/error-logger';

// import { ToggleStorybook } from '@local-storybook/toggle-storybook';

import AppScenes from './app-scenes';

/**
 * -----------------------------------------------------------------------------
 * This is the root component of our app.
 * Add app-wide providers from services of libs here.
 */
function AppRoot() {
  const [appIsReady, setAppIsReady] = useState(false);

  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence();

  /**
   * Kick off initial async loading actions, like loading fonts and RootStore
   */
  useEffect(() => {
    async function prepareApp() {
      try {
        /**
         * Keep the splash screen visible while we fetch resources
         */
        await SplashScreen.preventAutoHideAsync();
      } catch (error) {
        errorLogger({
          error: error as Error,
          errorCode: ErrorEventsEnum.ERROR_IN_APP_INITIALIZATION,
          message: 'Error while preparing the app',
        });
      } finally {
        // Render the app when the view is ready.
        setAppIsReady(true);
      }
    }

    prepareApp();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync().catch((error: Error) => {
        errorLogger({
          error,
          errorCode: ErrorEventsEnum.ERROR_IN_APP_INITIALIZATION,
          message: 'Failed to hide the splash screen',
        });
      });
    }
  }, [appIsReady]);

  /**
   * Reloads the previous navigation state of the app. Much faster in development
   * especially when making stateful changes that might reload the entire app.
   */
  if (!isNavigationStateRestored) return null;

  /**
   * Otherwise, we're ready to render the app. At this point,
   * most async stuff, is done.
   */
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <AppNavigationContainer
        initialState={initialNavigationState}
        onStateChange={onNavigationStateChange}>
        <AppQueryProvider>
          <ThemeProvider>
            {/* <ToggleStorybook> */}
            <AppScenes onLayoutRootView={onLayoutRootView} />
            {/* </ToggleStorybook> */}
          </ThemeProvider>
        </AppQueryProvider>
      </AppNavigationContainer>
    </SafeAreaProvider>
  );
}

export default AppRoot;
