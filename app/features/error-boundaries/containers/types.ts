import { ReactNode } from 'react';

import type { TErrorInScreenFallbackView } from './ErrorInScreen/ErrorInScreenFallback';

type THasError = string | boolean;

export interface IErrorInScreenState {
  hasError: THasError;
}

export interface IErrorInScreenProps {
  children?: ReactNode;
  errorMessage?: string;
  errorSubtitle: string;
  errorTitle: string;
  handleOnRetry?: () => void;
  hasError?: THasError;
  isRefreshing?: boolean;
  mainAction?: {
    label: string;
    onPress: () => void;
  };
  onClearError?: () => void;
}

export type TErrorInScreenActionsProps = Pick<
  IErrorInScreenProps,
  | 'mainAction'
  | 'onClearError'
>;

export interface IErrorBoundaryContainerProps extends IErrorInScreenProps {
  children: ReactNode;
  FallbackUIComponent: TErrorInScreenFallbackView;
}
