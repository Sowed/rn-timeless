import { createTheme } from '@shopify/restyle';

import { borderRadiiVariants } from './variants/borderRadiiVariants';
import { breakpointsVariants } from './variants/breakpointsVariants';
import { colorVariantsLight, colorVariantsDark } from './variants/colorVariants';
import { shadowVariants } from './variants/shadowVariants';
import { spacingVariants } from './variants/spacingVariants';
import { textVariants } from './variants/textVariants';

/**
 * -----------------------------------------------------------------------------
 * The Light Mode theme variable of the App
 * 
 * Note: Could extend the theme as a function to allow for dynamic variables like
 * the `scaleFactor` to `spacingVariants()`.
  // TODO: Update `button` and `card` variants when required
 */
export const theme = createTheme({
  textVariants,

  // textVariants: {
  //   cardHeader: {
  //     // fontFamily: fontFamily.primaryBold,
  //     fontWeight: 'bold',
  //     // fontSize: isTablet ? 22 : 18,
  //     // lineHeight: isTablet ? 26 : 22,
  //     color: 'typographySecondary',
  //   }
  // },
  colors: colorVariantsLight,
  spacing: spacingVariants(1),
  breakpoints: breakpointsVariants,
  borderRadii: borderRadiiVariants,
  shadows: shadowVariants,
  cardVariants: {
    primary: {},
    secondary: {},
    borderless: {},
  },
  buttonVariants: {
    primary: {},
    secondary: {},
  },
});

/**
 * The Dark Mode of the App.
 */
export const darkTheme = createTheme({
  ...theme,
  colors: colorVariantsDark,
});

/**
 * The `Type` definition of the global app theme.
 */
export type ThemeType = typeof theme | typeof darkTheme;
export type ThemeColorType = keyof ThemeType['colors'];
export type ThemeSpacingType = keyof ThemeType['spacing'];
export type ThemeBreakpointsType = keyof ThemeType['breakpoints'];
export type ThemeBorderRadiiType = keyof ThemeType['borderRadii'];
export type ThemeTextType = keyof ThemeType['textVariants'];
export type ThemeCardType = keyof ThemeType['cardVariants'];
export type ThemeButtonType = keyof ThemeType['buttonVariants'];
export type ThemeShadowType = keyof ThemeType['shadows'];
