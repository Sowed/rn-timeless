import { ErrorInfo } from 'react';

export enum ErrorEventsEnum {
  ERROR_IN_APP = '🅰️ - Application Wide Error',
  ERROR_IN_APP_INITIALIZATION = '🅰️ - Error while initinialising the application',
  ERROR_IN_SCREEN = '🅱️ - Error Caught by the Screen',
  ERROR_IN_API_CALL = '🌐 - Error in API call',
  ERROR_IN_ASYNC_STORAGE = '🗄 - Error Image/File Attachment',
  ERROR_IN_PERMISSION = '🔐 - Error in Accessing Permissions',
}

export type TErrorEventsKey = keyof typeof ErrorEventsEnum;

export interface IErrorLogToRemoteUtilOptions {
  error: Error;
  errorCode: ErrorEventsEnum;
  errorTitle?: string;
  message?: string;
  params?: Record<string, string | number>;
}

export interface ILogDevicePermissionErrorArgs {
  message?: string;
  shouldOpenSettings?: string;
}

export interface IErrorLoggerOptions {
  error: Error;
  errorCode: ErrorEventsEnum;
  errorInfo?: Record<string, unknown> | ErrorInfo;
  errorTitle?: string;
  message?: string;
  handleAsCrash?: boolean;
}
