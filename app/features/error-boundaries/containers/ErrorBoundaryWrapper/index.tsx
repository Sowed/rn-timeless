import React, { Component, ErrorInfo } from 'react';

import errorLogger, { ErrorEventsEnum } from '@services/error-logger';

import { IErrorBoundaryContainerProps, IErrorInScreenState } from '../types';

/**
 * -----------------------------------------------------------------------------
 * This captures error with in the underlying render method and the
 * sub-children of the specific component and derives a fallback screen to
 * prevent the error from propagating to the ancestors that might gradually
 * crashes the app.
 *
 * - Log the Error to the logging util, ideally to be sent to a to a remote
 *  logger like sentry/new relic.
 */
class ErrorBoundaryWrapper extends Component<
  IErrorBoundaryContainerProps,
  IErrorInScreenState
> {
  constructor(props: IErrorBoundaryContainerProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    errorLogger({
      errorCode: ErrorEventsEnum.ERROR_IN_SCREEN,
      error,
      errorInfo,
    });
  }

  handleResetError = () => {
    this.setState({ hasError: false });
  };

  render() {
    const { children, FallbackUIComponent } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <FallbackUIComponent
          {...this.props}
          hasError={hasError}
          onClearError={this.handleResetError}
        />
      );
    }

    return children;
  }
}

export default ErrorBoundaryWrapper;
