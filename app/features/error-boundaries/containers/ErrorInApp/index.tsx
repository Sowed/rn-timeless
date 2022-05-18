import React, { Component, ErrorInfo, ReactNode } from 'react';

import { ErrorComponent } from './error-component';

interface Props {
  children: ReactNode;
  catchErrors: 'always' | 'dev' | 'prod' | 'never';
}

interface State {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * -----------------------------------------------------------------------------
 * NOTE: Inspired by the extract from the Ignite CLI RN boilerplate
 *
 * This component handles whenever the user encounters a JS error in the
 * app. It follows the "error boundary" pattern in React. We're using a
 * class component because according to the documentation, only class
 * components can be error boundaries.
 *
 * Read more here:
 * @link: https://reactjs.org/docs/error-boundaries.html
 */
export default class ErrorBoundary extends Component<Props, State> {
  // eslint-disable-next-line react/state-in-constructor
  state = { error: null, errorInfo: null };

  // To avoid unnecessary re-renders
  shouldComponentUpdate(
    nextProps: Readonly<any>,
    nextState: Readonly<any>,
  ): boolean {
    // eslint-disable-next-line react/prop-types
    return nextState.error !== nextProps.error;
  }

  // If an error in a child is encountered, this will run
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    });

    // You can also log error messages to an error reporting service here
    // This is a great place to put NewRelic BugSnag, Sentry, Honeybadger, etc:
    // reportErrorToCrashReportingService(error)
  }

  // Reset the error back to null
  resetError = () => {
    this.setState({ error: null, errorInfo: null });
  };

  // Only enable if we're catching errors in the right environment
  isEnabled(): boolean {
    const { catchErrors } = this.props;

    return (
      catchErrors === 'always' ||
      (catchErrors === 'dev' && __DEV__) ||
      (catchErrors === 'prod' && !__DEV__)
    );
  }

  // Render an error UI if there's an error; otherwise, render children
  render() {
    const { children } = this.props;
    const { error, errorInfo } = this.state;

    return this.isEnabled() && error && errorInfo ? (
      <ErrorComponent
        onReset={this.resetError}
        error={error}
        errorInfo={errorInfo}
      />
    ) : (
      children
    );
  }
}
