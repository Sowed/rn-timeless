/**
 * NOTE: This has been inspired by the RN `Ignite CLI` boilerplate
 * 
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app-scenes.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ['HomeScreen', 'LoginScreen'];

/**
 * Determines whether the user is allowed to exit the app when the back button
 *
 * @param routeName Screen name of the route
 */
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
