import React from 'react';

import { IErrorInScreenProps } from '../types';
import ErrorBoundaryWrapper from '../ErrorBoundaryWrapper';

import ErrorInScreenFallback from './ErrorInScreenFallback';

/**
 * -----------------------------------------------------------------------------
 * Error boundary for screens and screen-like components.
 *
 * - `TODO`: Create another `ErrorInSection` for error boundaries in sections,
 * that are much smaller than screens, such as a card or modal.

 */
function ErrorInScreen(props: IErrorInScreenProps) {
  const { children } = props;

  return (
    <ErrorBoundaryWrapper
      {...props}
      FallbackUIComponent={ErrorInScreenFallback}
    >
      {children}
    </ErrorBoundaryWrapper>
  );
}

export default ErrorInScreen;
