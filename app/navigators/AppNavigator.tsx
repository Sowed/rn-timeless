/**
 * The app navigator is used for the primary navigation flows of your app.
 * It contains an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */

import React from 'react';

import AppStackRoutes from './AppStackRoutes';
// import AuthStackRoutes from './AuthStackRoutes';

/**
 * -----------------------------------------------------------------------------
 * This is the root entry point of the app navigation.
 * It routes the user to the respective stack based on their login status.
 *
 * - `AppStackRoutes` - the user is logged in such as home, profile, bookings.
 * - `AuthStackRoutes` - if the user is not logged in such as login, sign-up,
 * reset password etc. Add this with more screens added to the stack.
 */
export function AppNavigator() {
  // TODO: Get this state from an auth route
  // Render something other route if the user is not logged in, `nul` for now
  const isUserLoggedIn = true;

  return isUserLoggedIn ? <AppStackRoutes /> : null;
}

AppNavigator.displayName = 'AppNavigator';
