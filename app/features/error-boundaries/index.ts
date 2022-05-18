/**
 * This scopes all the error boundaries across the application.
 * - Such as errors boundaries engulfing the entire application or screens.
 * - TODO: Add customizable fallback screens for error in simple sections like
 *   cards or modals.
 */

export type { IErrorInScreenProps } from './containers/types';

export { default as ErrorInScreenFallbackView } from './containers/ErrorInScreen/ErrorInScreenFallback';
export { default as ErrorInApp } from './containers/ErrorInApp';
export { default as ErrorInScreen } from './containers/ErrorInScreen';