import { Alert, Linking } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import Config from 'react-native-config';

import {
  ErrorEventsEnum,
  IErrorLoggerOptions,
  IErrorLogToRemoteUtilOptions,
  ILogDevicePermissionErrorArgs,
} from './types';

/**
 * To be used in logging errors to remote utilities like `Sentry` or `NewRelic`.
 */
export const errorLogToRemoteUtil = async ({
  error,
  errorCode = ErrorEventsEnum.ERROR_IN_APP,
  errorTitle = '⭕️ errorLogToRemoteUtil',
  message = 'Something went wrong',
  params,
}: IErrorLogToRemoteUtilOptions) => {
  let deviceDetails = {};

  if (!__DEV__) {
    // if this is legal (👮‍♀️ + 👩‍⚖️)✅, then tab additional device info for debugging.
    deviceDetails = {
      brand: DeviceInfo.getBrand(),
      deviceId: DeviceInfo.getDeviceId(),
      model: DeviceInfo.getModel(),
      systemVersion: DeviceInfo.getSystemVersion(),
      version: DeviceInfo.getReadableVersion(),
    };
  }

  /**
   * ---------------------------------------------------------------------------
   * TODO:: Log this error to external remote tracker like...
   * - `NewRelic/Sentry/BugSnag/Honeybadger, etc:
   * 
   * This helps to keep track of what actually went wrong on
   * the user's device that we were not able to handle from the server or
   * or within app error boundaries.
   * */
  const errorObject = {
    app_or_api_errorParams: JSON.stringify(params),
    device_details: JSON.stringify(deviceDetails),
    title: `${errorCode}-${errorTitle}`,
  };

  console.error({
    '🔥 -  TODO: Send this error to NewRelic/Sentry/Own logger': 'APP ERROR',
    errorTitle,
    error,
    errorCode,
    errorObject,
    deviceDetails,
    params,
    message,
  });
};

/**
 * -----------------------------------------------------------------------------
 * Display when an error happens because of missing device permissions.
 * - WIP: This is a temporary solution until we have a proper solution.
 * TODO: Gracefully open permissions like WhatsApp does
 */
export const logDevicePermissionError = ({
  message,
  shouldOpenSettings,
}: ILogDevicePermissionErrorArgs) => {
  Alert.alert('Hang On!', message, [
    {
      text: 'Give Permission',
      onPress: () => {
        if (shouldOpenSettings) {
          Linking.canOpenURL('app-settings:').then((supported) => {
            if (!supported) {
              errorLogToRemoteUtil({
                errorCode: ErrorEventsEnum.ERROR_IN_PERMISSION,
                errorTitle: 'ERROR IN APP-SETTINGS DEVICE PERMISSION',
                error: new Error("Can't handle settings url"),
                message: 'Failed to prompt in App Review modal',
              });

              return null;
            }
            return Linking.openURL('app-settings:');
          });
        }
      },
      style: 'cancel',
    },
  ]);
};

/**
 * -----------------------------------------------------------------------------
 * This is a wrapper around the external error loggers to pass additional
 * anonymous information to the logging service.
 *
 * @param {{errorCode: string, error: {*}}} The error name & its stack trace
 */
const errorLogger = ({
  error,
  errorCode,
  handleAsCrash = true,
  message,
  errorInfo,
  errorTitle,
}: IErrorLoggerOptions) => {
  const errorAttributes = {
    errorCode,
    appEnvironment: Config.INSTANCE_NAME,
  };

  switch (errorCode) {
    case ErrorEventsEnum.ERROR_IN_APP: {
      console.info({
        '⭕️ - Application Error': errorCode,
        error,
        errorAttributes,
        message,
        errorInfo,
      });

      break;
    }
    case ErrorEventsEnum.ERROR_IN_SCREEN: {
      console.info({
        '🚨 - Screen Error Boundary': '---',
        error,
        errorCode,
        errorAttributes,
        message,
        errorInfo,
      });
      break;
    }
    case ErrorEventsEnum.ERROR_IN_API_CALL: {
      console.info({
        '🌐 🚨 -- Error n API call': '--',
        error,
        errorCode,
        errorAttributes,
        message,
        errorInfo,
      });
      break;
    }

    case ErrorEventsEnum.ERROR_IN_PERMISSION: {
      console.info({
        '🔐🚨 -- Error in Accessing Device Permissions': '--',
        error,
        errorCode,
        errorAttributes,
        message,
        errorInfo,
      });
      break;
    }

    // eslint-disable-next-line no-lone-blocks
    default: {
      // TODO: How did we even get here...Isolate that error if captured.
      console.info("Some error we don't know about");
      break;
    }
  }

  errorLogToRemoteUtil({
    error,
    errorCode,
    message,
    errorTitle,
  });

  // TODO: Log to favorite remote tool like NewRelic/Sentry or any as potential
  // App crashing error P1 issue.

  if (handleAsCrash) {
    // TODO: Log this as a crash
  }
};

export default errorLogger;
