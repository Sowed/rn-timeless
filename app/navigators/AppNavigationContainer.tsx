import React from 'react';
import { useColorScheme } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import { navigationRef } from './navigation-utilities';

type NavigationProps = Partial<
  React.ComponentProps<typeof NavigationContainer>
>;

/**
 * -----------------------------------------------------------------------------
 * The NavigationContainer is responsible for managing your app state and
 * linking your top-level navigator to the app environment.
 *
 * The provides the root navigator context to the application.
 *  See more from the DOC:: [NavigationContext](https://reactnavigation.org/docs/navigation-container)
 */
export function AppNavigationContainer(props: NavigationProps) {
  const colorScheme = useColorScheme();
  const { children } = props;

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      {...props}>
      {children}
    </NavigationContainer>
  );
}

AppNavigationContainer.displayName = 'AppNavigationContainer';
