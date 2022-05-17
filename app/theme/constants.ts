import { Dimensions } from 'react-native';
import { isTablet as isDeviceTablet } from 'react-native-device-info';

/**
 * Create Primitives to test override tablet & landscape styles.
 */
export const isTablet = isDeviceTablet();

/**
 * Coverts the boolean check for the tablet to determine if it's a string or not.
 */
export const isTabletAsString = isTablet.toString();

/**
 * This could be gotten from remote config to toggle theming on and off
 */
export const IS_THEMING_ENABLED = false;

/**
 * Async Storage `key` that is used to track the current saved app wide
 * `Theme Setting` in Memory and allows to configure the light and dark theme.
 */
export const SETTING_CURRENT_THEME = 'SETTING_CURRENT_THEME';

/**
 * Provides the width of the window, that can be used outside react components.
 * Prefer `useWindowDimensions` is used within react components.
 */
export const windowWidth = Dimensions.get('window').width;

/**
 * Provides the height of the window, that can be used outside react components.
 * Prefer `useWindowDimensions` is used within react components.
 */
export const windowHeight = Dimensions.get('window').height;
