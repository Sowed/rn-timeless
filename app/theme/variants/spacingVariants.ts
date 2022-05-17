
/**
 * This file contains spacing logic and primitives for the app theme
 */

export const baseUnit = 4;

export const spacing = {
  xxs: baseUnit,
  xs: baseUnit * 2,
  s: baseUnit * 4,
  m: baseUnit * 6,
  l: baseUnit * 8,
  xl: baseUnit * 12,
  xxl: baseUnit * 16,
} as const;

/**
 * -----------------------------------------------------------------------------
 * The full color colors to be used across the app. Any color outside this won't
 * work on `Box` and `Text` elements unless if via the style prop directly.
 *
 * This constraint helps in limiting the use of random colors within the app.
 */
export const spacingVariants = (scaleFactor: number = 1) => ({
  none: 0,
  xxs: spacing.xxs * scaleFactor,
  xs: spacing.xs * scaleFactor,
  s: spacing.s * scaleFactor,
  m: spacing.m * scaleFactor,
  l: spacing.l * scaleFactor,
  xl: spacing.xl * scaleFactor,
  xxl: spacing.xxl * scaleFactor,
  // 12px padding
  inputPadding: spacing.xxs * 3 * scaleFactor,

  /**
   * Alternatively you could use direct sizing as per screen real estate, such
   * as `isTablet`, a constant from `react-native-device-info`,
   * `import { isTablet } from '../constants'`
   */
  // none: 0,
  // xxs: isTablet ? 4 : 2,
  // xs: isTablet ? 6 : 4,
  // s: isTablet ? 12 : 8,
  // m: isTablet ? 20 : 16,
  // l: isTablet ? 28 : 24,
  // xl: isTablet ? 38 : 32,
  // xxl: isTablet ? 70 : 64,
});

export type SpacingVariantsType = keyof ReturnType<typeof spacingVariants>;
