import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import appRouteItems, { TAppStackParamsList } from './app-route-items';

/**
 * Documentation: https://reactnavigation.org/docs/stack-navigator/
 */
const AppStack = createNativeStackNavigator<TAppStackParamsList>();

/**
 * -----------------------------------------------------------------------------
 * This is the second primary navigation flow of the app.
 * It contains the "main" flow which the user will use once logged in.
 * Such as the home screen, user profile, bookings, notifications & my-tiers.
 */
function AppStackRoutes() {
  return (
    <AppStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={appRouteItems[0].name}
    >
      {appRouteItems.map(({ name, component, options }) => (
        <AppStack.Screen
          key={name}
          name={name}
          component={component}
          options={
            options || {
              headerBackAccessibilityLabel: name,
              presentation: 'modal',
            }
          }
        />
      ))}
    </AppStack.Navigator>
  );
}

export default AppStackRoutes;
