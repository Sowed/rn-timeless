import { isTablet } from '../constants';

/**
 * -----------------------------------------------------------------------------
 * Defines sizing break points for the app.
 * Extend it to add more breakpoints or provide a custom implementation.
 */
export const borderRadiiVariants = {
  none: 0,
  xxs: isTablet ? 8 : 4,
  xs: isTablet ? 12 : 8,
  xs2: isTablet ? 16 : 12,
  s: isTablet ? 18 : 16,
  m: isTablet ? 28 : 24,
  l: isTablet ? 40 : 32,
  xl: isTablet ? 52 : 48,
  xxl: isTablet ? 70 : 64,
} as const;

export type BorderRadiiVariantsType = keyof typeof borderRadiiVariants;
