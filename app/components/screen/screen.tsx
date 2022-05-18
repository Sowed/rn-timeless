import React, { ReactElement } from 'react';
import { StatusBar, StatusBarStyle } from 'react-native';

import { navigate } from '@navigators';

import {
  Box,
  BoxPropsType,
  useIsThemeLight,
  useThemeColors,
} from '@theme';
import { IErrorInScreenProps, ErrorInScreen } from '@features/error-boundaries';

import { useScreenSpacing } from './useScreenSpacing';

type IScreenProps = {
  backgroundColor?: BoxPropsType['backgroundColor'];
  paddingTop?: number;
  children: ReactElement;
  errorBoundaryOptions?: Pick<
    IErrorInScreenProps,
    | 'errorMessage'
    | 'errorSubtitle'
    | 'errorTitle'
    | 'mainAction'
  >;
  statusBarIsLight?: boolean;
};

/**
 * The central Screen component of the app, that provides a full screen view
 * in addition to error boundaries, out of the box.
 */
function Screen({
  backgroundColor,
  children,
  errorBoundaryOptions,
  paddingTop,
  statusBarIsLight,
  ...rest
}: IScreenProps) {
  const { mainBackground } = useThemeColors();
  const themeIsLight = useIsThemeLight();
  const { spaceTop } = useScreenSpacing();

  let updatedSpacingTop = paddingTop || spaceTop;

  if (paddingTop === 0) {
    updatedSpacingTop = 0;
  }
  const goHomeAfterError = () => {
    navigate('HomeScreen');
  };

  let statusBarStyle: StatusBarStyle = themeIsLight
    ? 'dark-content'
    : 'light-content';

  if (statusBarIsLight) {
    statusBarStyle = 'light-content';
  }
  return (
    <>
      <StatusBar
        animated
        backgroundColor={mainBackground}
        barStyle={statusBarStyle}
        showHideTransition="fade"
      />

      <ErrorInScreen
        {...errorBoundaryOptions}
        errorTitle={errorBoundaryOptions?.errorTitle || 'Sorry!'}
        errorSubtitle={
          errorBoundaryOptions?.errorTitle || 'Something went wrong!'
        }
        mainAction={
          errorBoundaryOptions?.mainAction || {
            label: 'Home',
            onPress: goHomeAfterError,
          }
        }
      >
        <Box
          height="100%"
          backgroundColor={backgroundColor || 'mainBackground'}
          style={{ paddingTop: updatedSpacingTop }}
          {...rest}
        >
          {children}
        </Box>
      </ErrorInScreen>

      {children}
    </>
  );
}

export default Screen;
