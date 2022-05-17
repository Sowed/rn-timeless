/**
 * This file contains booth the light and dark mode color palettes for the theme.
 */

import { Platform } from 'react-native';

/**
 * -----------------------------------------------------------------------------
 * The full color colors to be used across the app. Any color outside this won't
 * work on `Box` and `Text` elements unless if via the style prop directly.
 *
 * This constraint helps in limiting the use of random colors within the app.
 */
export const colors = {
  tlBlue600: '#000054',
  tlBlue500: '#012584',
  tlBlue400: '#1D4A8B',
  tlBlue300: '#6479AB',
  tlBlue200: '#A1ADCF',
  tlBlue100: '#D9DEED',
  tlBlue: '#EDF6FF',

  primary900: '#141414',
  primary800: '#2F2F2F',
  primary700: '#4B4B4B',
  primary600: '#717171',
  primary500: '#868686',
  primary400: '#B1B1B1',
  primary300: '#B1B1B1',
  primary200: '#E2E2E2',
  primary100: '#EEEEEE',

  disabledFillColorLight: '#F9F9F9',

  red700: '#5A0A00',
  red600: '#870F00',
  red500: '#AB1300',
  red400: '#E11900',
  red300: '#E85C4A',
  red200: '#F1998E',
  red100: '#FED7D2',
  red50: '#FFEFED',

  green700: '#10462D',
  green600: '#03582F',
  green500: '#03703C',
  green400: '#05944F',
  green300: '#06C167',
  green200: '#66D19E',
  green100: '#ADDEC9',
  green50: '#E6F2ED',

  orange700: '#E45417',
  orange600: '#EE6D1A',
  orange500: '#F47C1B',
  orange400: '#FB8B1D',
  orange300: '#FFA438',
  orange200: '#FFCC85',
  orange100: '#FFE0B5',
  orange50: '#FFF3E1',

  black: '#000000',
  white: '#FFFFFF',

  facebookBlue: '#1877F2',

  transparent: 'transparent',
} as const;

/**
 * -----------------------------------------------------------------------------
 * This defines the variants to be used by restyle theme and accessible via the
 * variant components.
 * 
 * Note: It's best to name them descriptively names rather than actual color.
 * - This helps in understanding the purpose of the color.
 * `colorVariantsLight` is the light variant of the theme color palette.
 * 
 */
export const colorVariantsLight = {
  // Generic UI colors
  mainBackground: colors.white,
  primaryBackground: colors.tlBlue600,
  secondaryBackground: colors.tlBlue,

  mainForeground: colors.black,
  primaryForeground: colors.primary900,
  secondaryForeground: colors.primary100,

  transparent: colors.transparent,

  // Brand colors
  tlDarkGray: colors.primary800,
  tlGray: colors.primary700,
  tlLightGray: colors.primary300,
  tlPowderBlue: colors.tlBlue100,
  tlBlue: colors.tlBlue,

  // Interaction colors
  active: colors.tlBlue500,
  inactive: colors.primary500,
  hover: colors.tlBlue400,
  textSelection:
    Platform.OS === 'ios' ? colors.tlBlue400 : colors.tlBlue200,
  pressed: colors.tlBlue600,
  disabled: colors.tlBlue100,
  disabledBackground: colors.disabledFillColorLight,
  disabledOutline: colors.primary100,

  // Feedback colors
  error: colors.red400,
  warning: colors.orange400,
  information: colors.tlBlue500,
  informationSecondary: colors.tlBlue200,
  success: colors.green400,
  successLight: colors.green200,

  // Layout colors
  shadow: colors.primary100,
  outline: colors.tlBlue100,

  // Typography colors
  typography: colors.primary900,
  typographySecondary: colors.primary700,
  typographyTertiary: colors.primary500,
  typographyLinks: colors.tlBlue500,
  typographyDisabled: colors.primary600,

  // Other brand colors
  surface: colors.white,
  overlay: colors.black,
  applePay: colors.black,
  applePayDisabled: colors.primary300,
  googlePay: colors.black,
  googlePayDisabled: colors.primary300,
  facebookBlue: colors.facebookBlue,
} as const;

/**
 * -----------------------------------------------------------------------------
 * This is the dark variant of the theme color palette.
 */
export const colorVariantsDark = {
  ...colorVariantsLight,

  // Generic UI colors
  mainBackground: colors.primary800,
  primaryBackground: colors.primary900,
  secondaryBackground: colors.primary700,

  mainForeground: colors.white,
  primaryForeground: colors.tlBlue,
  secondaryForeground: colors.primary900,
} as const;

export type ColorVariantsType = keyof typeof colorVariantsLight | keyof typeof colorVariantsDark;
